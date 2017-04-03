function map(data, fn) {
  const mappedData = [];

  data.forEach((el) => {
    mappedData.push(fn(el));
  });

  return mappedData;
}

function filter(data, fn) {
  const filteredData = [];

  data.forEach((el) => {
    if (fn(el)) filteredData.push(el);
  });

  return filteredData;
}

function reduce(data, fn) {
  let reducedData = 0;

  data.forEach((el) => {
    reducedData = fn(reducedData, el);
  });

  return reducedData;
}

module.exports = {
  filter,
  map,
  reduce,
};
