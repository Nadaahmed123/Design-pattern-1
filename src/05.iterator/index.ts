const arr = [1,2,3,4,5];


function rangeIterator(start: number, end: number, step: number = 1) {
  let current = start;

  return {
    next() {
      if ((step > 0 && current < end) || (step < 0 && current > end)) {
        const result = { value: current, done: false };
        current += step;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const myRange = rangeIterator(0, 10, 2);

console.log(myRange.next()); 
console.log(myRange.next());
console.log(myRange.next());
console.log(myRange.next()); 
console.log(myRange.next()); 
console.log(myRange.next()); 
