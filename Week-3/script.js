// assignment 1 memoize function.
const memoize = () => {
  let cache = {};
  return (...inputs) => {
    if (JSON.stringify(cache.inputs) === JSON.stringify(inputs)) {
      console.log("Fetching from cache");
      console.log(cache.inputs);
      return cache.results;
    } else {
      console.log("calculating result");
      let result = inputs.reduce((prev, next) => {
        return prev + next;
      }, 0);

      cache.results = result;
      cache.inputs = inputs;
      console.log(cache);
      return result;
    }
  };
};
const newAdd = memoize();
// a simple memoized function to add something
console.log(newAdd(14, 15, 23, 44));
//console.log(newAdd(14,15));
console.log(newAdd(14, 15, 23, 44));

// returned function from memoizedAdd
