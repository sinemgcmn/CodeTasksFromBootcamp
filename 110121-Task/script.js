/*Write a function that takes any number of numbers as arguments and returns the sum of those numbers*/

function takesOnlyNumber() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(takesOnlyNumber(5, 10));
console.log(takesOnlyNumber(5, 10, 15));
console.log(takesOnlyNumber(5, 10, 15, 100, 200));

/*Write a function that takes another function as an argument. 
It should wait 1.5 seconds and then run the function that was passed in.*/

function waitThenRun(myVar) {
    setTimeout(function () {
        console.log(myVar());
    }, 1500);
}

waitThenRun(function () {
    console.log("I'm the callback! :D");
});

/*Write a function that expects a number as an argument.
If the value that is passed in is less than 0, equal to 0, or not a number,
the function should return the string 'ERROR'. 

If the number that is passed in is greater than or equal to 1000000 it should simply return the number. 

Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than
or equal to 1000000 and return that.*/

function expNumber(number) {
    if (number < 0 || number === 0 || typeof number !== "number") {
        return "ERROR";
    } else if (number > 1000000 || number === 1000000) {
        return number;
    } else {
        while (number !== 1000000 && number < 1000000) {
            number = number * 10;
        }
        return number;
    }
}

console.log(expNumber(200000));
