//assignment number 4.1
const customPromiseState = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};
class customizedPromise {
  constructor(fn) {
    this.customPromiseState = customPromiseState.PENDING;
    this.resolve = this.resolve.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenfn = null;
    this.catchfn = null;
    fn(this.resolve, this.rejector);
  }
  resolve(resolvedData) {
    if (this.customPromiseState === customPromiseState.PENDING) {
      this.thenfn && this.thenfn(resolvedData);
      console.log(resolvedData);
    }
    this.customPromiseState = customPromiseState.RESOLVED;
  }
  rejector(rejectedData) {
    if (this.customPromiseState === customPromiseState.PENDING) {
      this.catchfn && this.catchfn(rejectedData);
      console.log(rejectedData);
    }
    this.customPromiseState = customPromiseState.REJECTED;
  }
  then(thenfn) {
    this.thenfn = thenfn;
    return this;
  }
  catch(catchFn) {
    this.catchfn = catchfn;
    return this;
  }
}

const getRandom = () => {
  new customizedPromise((res, rej) => {
    const randomNumber = Math.floor(Math.random() * 100);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with Num: ${randomNumber}`);
        // console.log('reject');
      }
      res(`resolved with num: ${randomNumber}`);
    }, 10 * randomNumber);
    console.log("resolved");
  });
};
getRandom();

// assignment number 2

class Person {
  constructor(firstName, subject) {
    this.firstName = firstName;
    this.subject = subject;
  }
}

const teacher = new Person("Durgesh", "Maths");
Person.prototype.teach = function () {
  console.log(`${this.firstName} is teaching ${this.subject}`);
};
teacher.teach();

// assignment fibonaaci using itereator`

function fibo(num) {
  this.num = num;
  this.index = 0;
  this.first = 0;
  this.second = 1;
  // this.nextel;
}

fibo.prototype = {
  hasNext() {
    return this.index < num;
  },
  next() {
    let nextel;
    if (this.index <= 1) {
      nextel = this.index;
    } else {
      nextel = this.first + this.second;
      // console.log(nextel);
      this.first = this.second;
      this.second = nextel;
    }
    // console.log(this.nextel);
    this.index++;
    //  console.log(this.index);
    return nextel;
  },
};
// console.log(fibo(5));
const iter = new fibo(10);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
