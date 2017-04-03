const { map, filter, reduce } = require('./higherOrder');

const curry = arr => filterFn => mapFn => (reduceFn) => {
  const result = reduce(map(filter(arr, filterFn), mapFn), reduceFn);
  return result;
};

module.exports = { curry };
