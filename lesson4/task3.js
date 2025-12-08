let min = 1;
let max = 100;
let randomAge = Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Your age is ' + randomAge);
if (randomAge >= 18) {
    console.log(`You are an adult.`);
} else {
    console.log(`You are a minor.`);
}
