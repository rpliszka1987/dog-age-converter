// My age variable
var myAge = 36;

// Variable of early years with value of 2
let earlyYears = 2;
// Multiply the earlyYears by 10.5
earlyYears *= 10.5;

// Subtract 2 from myAge
let laterYears = (myAge -= 2);

// Convert to dog years
laterYears *= 4;

// Calcualte age in dog years.
myAgeInDogYears = earlyYears + laterYears;

// My name and convert to lowercase
let myName = "Robert".toLowerCase();

// Final console output
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
