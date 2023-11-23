//import { addNumbers } from './math.js';
function addNumbers(a, b) {
  return a + b;
}
describe('addNumbers function', () => {
  it('should add two positive numbers correctly', () => {
    const result = addNumbers(5, 10);
    expect(result).toBe(15);
  });

  it('should add a positive and a negative number correctly', () => {
    const result = addNumbers(8, -3);
    expect(result).toBe(5);
  });

  it('should add two negative numbers correctly', () => {
    const result = addNumbers(-7, -4);
    expect(result).toBe(-11);
  });

  it('should add zero to a number and return the same number', () => {
    const result = addNumbers(10, 0);
    expect(result).toBe(10);
  });

  it('should add two decimal numbers correctly', () => {
    const result = addNumbers(2.5, 3.7);
    expect(result).toBeCloseTo(6.2); // Using toBeCloseTo for floating point arithmetic
  });
});
