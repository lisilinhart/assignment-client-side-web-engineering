function Morray(array = []) {
  this.array = array;
}

Morray.prototype.input = function input(array) {
  this.array = array;
  return this;
};

Morray.prototype.odd = function odd() {
  const result = this.array.filter(n => n % 2);
  return new Morray(result);
};

Morray.prototype.even = function even() {
  const result = this.array.filter(n => n % 2 === 0);
  return new Morray(result);
};

Morray.prototype.add = function add(num) {
  const result = this.array.map(n => n + num);
  return new Morray(result);
};

Morray.prototype.subtract = function subtract(num) {
  const result = this.array.map(n => n - num);
  return new Morray(result);
};

Morray.prototype.divide = function divide(num) {
  const result = this.array.map(n => n / num);
  return new Morray(result);
};

Morray.prototype.multiply = function multiply(num) {
  const result = this.array.map(n => n * num);
  return new Morray(result);
};

Morray.prototype.sum = function sum() {
  const result = [this.array.reduce((prev, current) => prev + current)];
  return new Morray(result);
};

Morray.prototype.bind = function bind(transform) {
  const result = this.array.map(n => transform(n));
  return new Morray(result);
};

Morray.prototype.getArray = function getArray() {
  return this.array;
};

module.exports = { Morray };
