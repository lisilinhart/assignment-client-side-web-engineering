import { Morray } from '../src/monad';

describe('monad', () => {
  it('should test setting array with input()', () => {
    const morray = new Morray();
    morray.input([1, 2, 3]).getArray().should.eql([1, 2, 3]);
  });

  it('should test setting array with constructor', () => {
    const morray = new Morray([1, 2, 3]);
    morray.getArray().should.eql([1, 2, 3]);
  });

  it('should test add()', () => {
    const morray = new Morray([1, 2, 3]);
    morray.add(5).getArray().should.eql([6, 7, 8]);
    morray.getArray().should.eql([1, 2, 3]);
  });

  it('should test subtract()', () => {
    const morray = new Morray([1, 2, 3]);
    morray.subtract(1).getArray().should.eql([0, 1, 2]);
    morray.getArray().should.eql([1, 2, 3]);
  });

  it('should test multiply()', () => {
    const morray = new Morray([1, 2, 3]);
    morray.multiply(2).getArray().should.eql([2, 4, 6]);
    morray.getArray().should.eql([1, 2, 3]);
  });

  it('should test divide()', () => {
    const morray = new Morray([2, 4, 6]);
    morray.divide(2).getArray().should.eql([1, 2, 3]);
    morray.getArray().should.eql([2, 4, 6]);
  });

  it('should test bind()', () => {
    const morray = new Morray([2, 4, 6]);
    morray.bind(n => n * 2).getArray().should.eql([4, 8, 12]);
    morray.getArray().should.eql([2, 4, 6]);
  });

  it('should test sum()', () => {
    const morray = new Morray([2, 4, 6]);
    morray.sum().getArray().should.eql([12]);
    morray.getArray().should.eql([2, 4, 6]);
  });

  it('should test chaining', () => {
    const morray = new Morray([2, 4, 6]);
    morray.divide(2).multiply(3).add(1).subtract(1).getArray().should.eql([3, 6, 9]);
    morray.sum().subtract(1).getArray().should.eql([11]);

    morray.getArray().should.eql([2, 4, 6]);
  });
});
