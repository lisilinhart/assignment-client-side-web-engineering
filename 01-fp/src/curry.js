const { map, filter, reduce } = require('./higherOrder');

const data = [1, 2, 3, 4, 5, 6];

const filterByMod2 = value => value % 2 === 0;
const filterByMod3 = value => value % 3 === 0;
const multiplyBy2 = value => value * 2;
const multiplyBy3 = value => value * 3;
const sumAll = (pre, cur) => pre + cur;

const curry = arr => filterFn => mapFn => (reduceFn) => {
  const result = reduce(map(filter(arr, filterFn), mapFn), reduceFn);
  return result;
};

const sumOfFilterByMod2MultiplyBy3 = curry(data)(filterByMod2)(multiplyBy3)(sumAll);
const sumOfFilterByMod3MultiplyBy2 = curry(data)(filterByMod3)(multiplyBy2)(sumAll);

module.exports = { curry };
