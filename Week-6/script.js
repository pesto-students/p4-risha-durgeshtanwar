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
//console.log(sumArray(a));

let b = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//console.log(sumArray(b));

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
//console.log(...spiralMatrix(arr));

// assignment 6.3

// Problem 6.3 Sort array of 0's,1's and 2's

let arrayOfBinary = [0, 2, 1, 2, 0]; // [0,0,0,1,2,2]
function sorting(problem) {
  //console.log(problem[0]);

  let arr0 = [];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === 0) {
      console.log(problem[i]);
      arr0.push(problem[i]);
    } else if (problem[i] === 1) {
      arr1.push(problem[i]);
    } else if (problem[i] === 2) {
      arr2.push(problem[i]);
    }
  }
  //console.log(arr0);
  return [...arr0, ...arr1, ...arr2];
}
// console.log(sorting(arrayOfBinary));

// Assignment 6.4
//Problem 6.4 : Best time to buy and sell stock

let inputs = [7, 1, 5, 3, 6, 4];
function bestTimeToBuyAndSell(inputs) {
  let resultArray = [];
  let buyingDay = inputs.indexOf(Math.min(...inputs)) + 1;
  let buyingDayIndex = buyingDay - 1;
  let buyingDayValue = inputs[buyingDayIndex];
  let highestValue = Math.max(...inputs);
  let indexOfHighestValue = inputs.indexOf(highestValue);
  if (buyingDayIndex > indexOfHighestValue) {
    const arr = inputs.slice(buyingDayIndex, inputs.length);
    let highestValueInSlicedArray = Math.max(...arr);
    // console.log(highestValueInSlicedArray);
    return { profit: highestValueInSlicedArray - buyingDayValue };
  } else {
    return "0 profit";
  }
}
console.log(bestTimeToBuyAndSell(inputs));
console.log(bestTimeToBuyAndSell([7, 6, 4, 3, 1]));
