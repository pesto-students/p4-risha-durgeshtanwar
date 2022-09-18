const math = {
  sum(a, b) {
    return a + b;
  },
  multiplication(a, b) {
    return a * b;
  },
  subtraction(a, b) {
    return a - b;
  },
};

console.log(math.sum(10, 23));
console.log(math.multiplication(23, 10));
console.log(math.subtraction(23, 10));

module.exports = math;
