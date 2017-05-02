import { take, call, put, select, throttle, takeEvery, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { driversLoaded, driversLoadingError, constructorsLoaded, constructorsError } from './actions';
import { LOAD_DRIVERS, LOAD_CONSTRUCTORS } from './constants';
import { selectConstructorsLength } from './selectors';


export function* getDrivers(action) {
  const constructor = action.constructor;
  const requestURL = `http://ergast.com/api/f1/constructors/${constructor}/drivers.json`;

  try {
    const response = yield call(request, requestURL);
    const drivers = response.MRData.DriverTable.Drivers;
    yield put(driversLoaded(drivers));
  } catch (err) {
    yield put(driversLoadingError(err));
  }
}

export function* getConstructors(action) {
  const limit = 30;
  const requestURL = `http://ergast.com/api/f1/constructors.json?limit=${limit}&offset=${action.offset}`;

  try {
    const response = yield call(request, requestURL);
    const constructors = response.MRData.ConstructorTable.Constructors;
    yield put(constructorsLoaded(constructors));

    const total = ~~response.MRData.total;
    const current = yield select(selectConstructorsLength);
    if (current < total) {
      yield put({ type: LOAD_CONSTRUCTORS, offset: current });
    }
  } catch (err) {
    yield put(constructorsError(err));
  }
}

export function* driversData() {
  const watcher = yield takeLatest(LOAD_DRIVERS, getDrivers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* constructorsData() {
  const watcher = yield throttle(500, LOAD_CONSTRUCTORS, getConstructors);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// All sagas to be loaded
export default [
  driversData,
  constructorsData,
];
