/*Write a function that takes an array as an argument and returns a new array containing
all of the items that are in the array that was passed in but in reverse order.*/

function structureArr(arr) {
    let newArr = [...arr];
    newArr.reverse();
    return newArr;
}

console.log(structureArr((arr = [10, 20, 30, 40])));

/*Write a function that takes two arrays as arguments and
returns a new array containing all of the items in the two arrays passed to it.*/

function combineArrays(arrOne, arrTwo) {
    let combineArr = [...arrOne, ...arrTwo];
    return combineArr;
}

console.log(combineArrays((a = [10, 20, 30, 40]), (b = [50, 60, 70, 80])));

/*Rewrite the following function to use destructuring assignment
for the three variables it creates*/

const city = {
    name: "Berlin",
    country: "Germany",
    numPeople: 500,
};

const logInfo = ({ name, country, numPeople }) => {
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};

console.log(logInfo(city));

/*Pretend that it is 2002 and rewrite the following hipster 
Javascript so it will work in Internet Explorer 5 and Netscape 4.*/

var city1 = {
    name: "Berlin",
    country: "Finland",
};

var city2 = {
    country: "Germany",
};

function getNameAndCountry(obj) {
    return [obj.name, obj.country];
}

function getRelocatedCity(city1, city2) {
    var result = getNameAndCountry(city2);
    city1.country = result[1];
    return city1;
}

console.log(getRelocatedCity(city1, city2));
