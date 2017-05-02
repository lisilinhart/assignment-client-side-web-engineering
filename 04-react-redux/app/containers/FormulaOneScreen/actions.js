/*
 * App Actions
 */

import {
  LOAD_DRIVERS,
  LOAD_DRIVERS_SUCCESS,
  LOAD_DRIVERS_ERROR,
  LOAD_CONSTRUCTORS,
  LOAD_CONSTRUCTORS_SUCCESS,
  LOAD_CONSTRUCTORS_ERROR,
} from './constants';

export function loadDrivers(constructor) {
  return {
    type: LOAD_DRIVERS,
    constructor,
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

export function loadConstructors(offset = 0) {
  return {
    type: LOAD_CONSTRUCTORS,
    offset,
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
