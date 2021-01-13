////////////FIRST//////////////////

function each(param, callback) {
    if (Array.isArray(param)) {
        for (var i = 0; i < param.length; i++) {
            callback(param[i], [i]);
        }
    } else if (typeof param == "object") {
        for (var prop in param) {
            callback(param[prop], prop);
        }
    }
}

//test
each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

////////////SECOND//////////////////

function arrReverse(arr) {
    var revArr = arr.slice();
    revArr.reverse();
    return revArr;
}

var myArr = [1, 2, 3, 4, 5, 6, 7];

console.log(arrReverse(myArr));
console.log(myArr);

////////////THIRD//////////////////
//Thıs one is not what you want I know.
//I have just somehow could not manage it.

var newArray = [-90, -100, -3, -2, -1, 0, 1, 2, 3, 5, 6, 7, 8];

function getLessThanZero(num) {
    for (let i = 0; num > i; i++) {
        if (num > 0) {
            return false;
        }
    }
    return num < 0;
}

console.log(newArray.filter(getLessThanZero)); // [2, 3, 5, 7, 11, 13]
