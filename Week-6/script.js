// please use node script.js to run this file
// assignment 6.1
// max sum contiguas array

function sumArray(nums) {
  let localMaxSum = 0;
  let globalMaxSum = -Infinity;
  let i = 0;
  while (i < nums.length) {
    localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
    globalMaxSum = Math.max(localMaxSum, globalMaxSum);
    i++;
  }
  return globalMaxSum;
}
let a = [1, 2, 3, 4, -10];
console.log(sumArray(a));

let b = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(sumArray(b));

// assignment 6.2

// Problem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

// 1 2 3
// 4 5 6
// 7 8 9

//  output should be 1 2 3 6 9 8 7 4 5

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const spiralMatrix = (matrix) => {
  let result = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = "right";

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
    }
    top += 1;
    direction = "down";
    if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
    }
    right -= 1;
    direction = "left";
    if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }
    bottom -= 1;
    direction = "up";
    if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
    }
    left += 1;
    direction = "right";
  }
  return result;
};
console.log(...spiralMatrix(arr));

// assignment 6.3
