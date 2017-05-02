import { createSelector } from 'reselect';

/**
 * Direct selector to the formulaOneScreen state domain
 */
// const selectFormulaOne = () => (state) => state.get('formulaOneScreen');

const directSelectFormulaOne = (state) => state.get('formulaOneScreen');

/**
 * Select the constructors
 */

const selectFormulaOneConstructor = () => createSelector(
  directSelectFormulaOne,
  (homeState) => homeState.get('constructors')
);

export const selectConstructorsLength = createSelector(
  selectFormulaOneConstructor(),
  (data) => data.length,
);

/**
 * Select the drivers
 */

const selectFormulaOneDrivers = () => createSelector(
  directSelectFormulaOne,
  (homeState) => homeState.get('drivers')
);

/**
 * Select the constructors name
 */

const selectConstructorNames = () => createSelector(
  selectFormulaOneConstructor(),
  (constractors) => {
    const items = [];
    if (constractors) {
      Object.keys(constractors).map((key) => (items.push(constractors[key].name)));
    }
    return items;
  }
);

/**
 * Default selector used by FormulaOneScreen
 */

const makeSelectFormulaOneScreen = () => createSelector(
  directSelectFormulaOne(),
  (substate) => substate.toJS()
);

export default makeSelectFormulaOneScreen;

export {
  directSelectFormulaOne,
  selectFormulaOneConstructor,
  selectConstructorNames,
  selectFormulaOneDrivers,
};
