
// variable declaration 
var i;

//assigning value 
i = 11; //  

// expression generates value 
// operators  - binary - unary and ternary 
i % 3; 

//undefined 
var x;
console.log(x);

var obj = {};
// console.log(obj.funky); /// ????

function fn(){}
console.log(fn());


//if you try to reach a property of undefined, you will get an error and your program will crash 


// null is more explicit 
var obj = {},
obj = null;

//if you convert them to number, there is a difference

Number(null) = 0;
Number(undefined) = NaN;

console.log(null * 10);
console.log(undefined *10);

//boolean you can covert them to numbers

console.log (false - 2); //false will be 0
console.log(true-2); //true will be 1

//bigInt
var myNum = 10;
var myBigInt = 234567890n // you can mix and match them 
console.log(myNum + myBigInt);

//string

var str = 'abc'; 
var str = "quote \"amd \n single quote'"; //escape 

//objects // collection of values with names // keys and values

var obj = {
    funky:'chicken",
    age:23,
    isGoodLooking:true,
};

// All types are primitive other than OBJECTS
// Functions and arrays are special kind of object
//Keys of arrays are indexes 0 1 2 3 4 5... 

var a [10,20,30]; // 2 is the highest index and length of the array is highest index + 1

//functions are values so that you can assign them, return them etc.
// You can run/invoke the function
//functions are objects that you can call 

function fn(a, b, c){}
console.log(fn.name);

console.log(function fn())

//TYPEOF operator 

var a = 10;
console.log(typeof a);

var a = [];
console.log(Array.isArray(a));

var a = function fn(); // it is gonna say funtion as a type but funtion is an object
console.log (typeof a);

var a = null; 
console.log(typeof a); // it is gonan gove that it is an object but it is a bug

// so you can use triiple equal
var a = null;
console.log(a === null;

//NaN"s type is a number
var a = NaN;
console.log(typeof a); 

//You can not equal ir compare it 
console.log(NaN === NaN);

//to check
console.log(isNan(a));
console.log(a != a);

console.log(isNan(null)); // it is gonna convert null to a number an it is gonna be 0
console.log(Number.isNan(null));
console.log(Number.isNan('10'* 'pizza'));

var b = 0;

// if(b){
//     console.log('yes');
// }
// else {
//     console.log('no');
// }


// be carefull about the empty string, 
var c = "" // is is falsy
var d = " "// true because there is a space in it. 

var e = "abc";
var f = null;

var g = !e;

console.log(g);

console.log(10 != 2+8);

if (e && f){ /// Always be careful about this topic, it does not produce any boolean, it chooses one of the  falsy or truely elenent considering the operator 
    console.log("yes");
} 
    console.log("no");
}

a = 20;
a++; //post-fix
++a;// prefix if you wanna use it with immediate effect you should use prefix 

var i = 10;
while(i < 5){
    console.log(i);
    i++;
}

console.log("finally is is" + i); 

var a = [10,20,30]

for(var = 0; i<a.length; i++){
    console.log(i, a[i]);
};

var o = {
    funky: "chicken",
    age: 23,
};


/// accessing the keys
for(var key in o){
    console.log(key, o[key]);
}

//accesing the value
console.log(o.age);
console.log(o['age']);

////////
function logType (arg){
    if (typeof arg == "undefined!") {
        console.log("undefined!")
    }
}

////////



