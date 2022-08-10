// assignment 1 memoize function.
const memoize = () => {
  //let cache = {};
  let array = [];
  return (...inputs) => {
    let res = array.find((input, i) => {
      let i1 = input.inputs;
      let i2 = inputs;
      if (JSON.stringify(i1) === JSON.stringify(i2)) {
        return input.results;
      }
    });
    if (res) {
      console.log("result fetched from cache");
      console.log(res.results);
      return res.results;
    } else {
      let cache = {};
      console.log("calculating result");
      let result = inputs.reduce((prev, next) => {
        return prev + next;
      }, 0);

      cache.results = result;
      cache.inputs = inputs;
      //  console.log(cache);
      array.push(cache);
      // console.log(array);
      return result;
    }
  };
};

const newAdd = memoize();
// a simple memoized function to add something
// console.time();
// console.log(newAdd(12, 12, 33, 45, 23, 55, 23, 55));
// console.timeEnd();
// console.log(newAdd(10, 12));
// console.log(newAdd(12, 12, 33, 45, 23, 55));
// console.log(newAdd(12, 12, 33, 45, 23, 55, 23, 55));
// console.log(newAdd(100));
// console.log(newAdd(10, 12));

//! assignment number 2
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

//* we are getting the output 'count is 0' because increment function is incrementing the value but the message variable is outside of the increment method. so it takes that value to 0
