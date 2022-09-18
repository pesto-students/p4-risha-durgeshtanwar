const math = require("./mathOperations");

test("adds 1 + 2 to equal 3", () => {
  expect(math.sum(1, 2)).toBe(3);
});

test("multiply 2 * 3 to equal 6", () => {
  expect(math.multiplication(2, 3)).toBe(6);
});

test("subtraction 4 - 2 equal 2", () => {
  expect(math.subtraction(4, 2)).toBe(2);
});
