/*
 *
 * FormulaOneScreen reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONSTRUCTORS_SUCCESS,
  LOAD_DRIVERS_SUCCESS,
} from './constants';

const initialState = fromJS({});

function formulaOneScreenReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONSTRUCTORS_SUCCESS:
      const loaded = action.constructors;
      const set = state.get('constructors');
      const merged = set ? set.concat(loaded) : loaded;
      return state.set('constructors', merged);
    case LOAD_DRIVERS_SUCCESS:
      return state.set('drivers', action.drivers);
    default:
      return state;
  }
}

export default formulaOneScreenReducer;
