const countries = require("./countries");

//When find is passed an empty string, it returns an empty array
test("find returns an empty array when it is passed an empty string", () => {
    expect(countries.find("")).toEqual([]);
});

//The array that it returns contains no more than four matches
test("The array that find function returns contains no more than four matches", () => {
    expect(countries.find()).toEqual([].slice(0, 4));
});

//The search is case insensitive
test.only("The search should be case insensitive", () => {
    expect(countries.find("finLanD")).toEqual(["Finland"]);
});

//If there are no matching countries, an empty array is returned
test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("aadsfafag")).toEqual([]);
});
