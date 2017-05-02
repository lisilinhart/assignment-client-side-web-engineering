/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_DRIVERS,
  LOAD_DRIVERS_SUCCESS,
  LOAD_DRIVERS_ERROR,
  LOAD_CONSTRUCTORS,
  LOAD_CONSTRUCTORS_SUCCESS,
  LOAD_CONSTRUCTORS_ERROR,
} from './constants';

export function loadDrivers() {
  return {
    type: LOAD_DRIVERS,
  };
}

export function driversLoaded(drivers) {
  return {
    type: LOAD_DRIVERS_SUCCESS,
    drivers,
  };
}

export function driversLoadingError(error) {
  return {
    type: LOAD_DRIVERS_ERROR,
    error,
  };
}

export function loadConstructors() {
  return {
    type: LOAD_CONSTRUCTORS,
  };
}

export function constructorsLoaded(constructors) {
  return {
    type: LOAD_CONSTRUCTORS_SUCCESS,
    constructors,
  };
}

export function constructorsError(error) {
  return {
    type: LOAD_CONSTRUCTORS_ERROR,
    error,
  };
}
