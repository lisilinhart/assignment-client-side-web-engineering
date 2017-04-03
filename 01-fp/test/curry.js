import { curry } from '../src/curry';

describe('curry', () => {
  it('should test itself', () => {
    const data = [1, 2, 3, 4, 5, 6];

    const filterByMod2 = value => value % 2 === 0;
    const filterByMod3 = value => value % 3 === 0;
    const multiplyBy2 = value => value * 2;
    const multiplyBy3 = value => value * 3;
    const sumAll = (prev, current) => prev + current;

    const curriedSumOfFilterByMod2MultiplyBy3 = curry(data)(filterByMod2)(multiplyBy3)(sumAll);
    const sumOfFilterByMod2MultiplyBy3 = data.filter(filterByMod2).map(multiplyBy3).reduce(sumAll);

    const curriedSumOfFilterByMod3MultiplyBy2 = curry(data)(filterByMod3)(multiplyBy2)(sumAll);
    const sumOfFilterByMod3MultiplyBy2 = data.filter(filterByMod3).map(multiplyBy2).reduce(sumAll);

    curriedSumOfFilterByMod2MultiplyBy3.should.eql(sumOfFilterByMod2MultiplyBy3);
    curriedSumOfFilterByMod3MultiplyBy2.should.eql(sumOfFilterByMod3MultiplyBy2);
  });
});
