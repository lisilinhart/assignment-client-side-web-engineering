import { map, filter, reduce } from '../src/higherOrder';

describe('higherOrder', () => {
  it('should test reduce()', () => {
    map([1, 2, 3, 4, 5], n => n * 2).should.eql([2, 4, 6, 8, 10]);
  });

  it('should test filter()', () => {
    filter([1, 2, 3, 4, 5], n => n % 2).should.eql([1, 3, 5]);
  });

  it('should test reduce()', () => {
    reduce([1, 2, 3, 4, 5], (prev, current) => prev + current).should.eql(15);
  });
});
