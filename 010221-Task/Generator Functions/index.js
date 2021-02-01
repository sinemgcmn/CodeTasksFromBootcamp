// //1-Implement FizzBuzz using a generator function and a for...of loop.

function* fizzBuzz() {
    for (var i = 1; i < 100; i++) {
        if (i % 3 === 0) {
            yield "Fizz";
        } else if (i % 5 === 0) {
            yield "Buzz";
        } else if (i % 15 === 0) {
            yield "FizzBuzz";
        }
        yield i;
    }
}

let iterator = fizzBuzz();

for (let val of iterator) {
    console.log("val: ", val);
}

/*Write a generator function that expects to be passed an array of values. 
When next is called on the iterator object that this function returns, 
the values in the array should be yielded in reverse order. 
The array that is passed to the generator function should stay in its original order */

function* generateVal(arr) {
    let newArr = [...arr];
    newArr.reverse();
    yield newArr;
}

const newIterator = generateVal([10, 20, 30, 40]);
console.log(newIterator.next().value);
