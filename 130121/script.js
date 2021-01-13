var x;
var doubleX;

x = 20;

function timesTwo(num) {
    return num * 2;
}

doubleX = timesTwo(x);

var numbers;

numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {
    y: timesTwo(x),
};
