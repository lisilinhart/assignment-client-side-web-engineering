
import { fromJS } from 'immutable';
import formulaOneScreenReducer from '../reducer';

describe('formulaOneScreenReducer', () => {
  it('returns the initial state', () => {
    expect(formulaOneScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});
