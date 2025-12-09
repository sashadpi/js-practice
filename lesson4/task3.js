let min = 1;
let max = 100;
let randomAge = Math.floor(Math.random() * (max - min + 1)) + min;
let checkAge = (randomAge >= 18);

console.log('Your age is ' + randomAge);
console.log(`You are an adult.` + checkAge);

