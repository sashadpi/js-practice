// let x = 3;

// if (x >= 5) {
//     console.log('x is bigger than 5');
// }

// if (x === 5) {
//     console.log('X is exacly 5');
// }

// let x = 3;
// if (x > 5) {
//     console.log('X is bigger than 5');
//     if (x < 50) {
//         console.log('X is bigger than 50');
//     }
// }

// let x = 3;
// if (x === 3) console.log('X is 3');

// let time = 30;

// if (time < 5) {
//     console.log('Good night');
// } else if (time < 10) {
//     console.log('Good morning');
// } else if (time < 18) {
//     console.log('Good day');
// } else if (time < 24) {
//     console.log('Good evening')
// } else {
//     console.log('Your input is wrong');
// }

// let x = 4;
// if (x > 5) {
//     console.log('X is bigger than 5');
// } else {
//     console.log('X is less or equal than 5');
// }

//Логічні оператори 

// let isAdult = false;
// if(!isAdult) {
//     console.log('You can enter');
// }

// console.log(!!true);
// console.log(!!0);
// console.log(!!'String');

// const numberA = 15;
// const numberB = -54;

// if (numberA > 0 && numberB > 0) {
//     console.log('Both numbers are positive');
// } else if (numberA < 0 && numberB < 0) {
//     console.log('Both numbers are negative')
// } else {
//     console.log('At least one number is negative');
// }

// let age = -1;

// if (age >= 3 && age <= 13) {
//     console.log('It is a child');
// } else if (age >= 14 && age <= 17) {
//     console.log('It is a teenager');
// } else if (age >= 18 && age <= 30) {
//     console.log('It is a young rerson');
// } else if (age >= 31 && age <= 99) {
//     console.log('It is an adult');
// } else if (age <= 0) {
//     console.log('Incorrect age');
// }  else { 
//     console.log('You are too young/adult');
// }

// const numberA = -15;
// const numberB = -54;

// if (numberA > 0 && numberB > 0) {
//     console.log('Both numbers are positive');
// } else if (numberA < 0 || numberB < 0) {
//     console.log('At least one number is negative')
// } 


// let age = 17;
// let message = age >= 18 ? 'Access granted' : 'Access aborted';
// console.log(message);


//Passenger should have enough money on bank account
//Passenger should be elder than 18
//Passenger should not have more than 20 KG of baggage

let money = 1000;
let isPassengerAdult = true;
let baggageWeight = 30;
let ticketPrice = 500;
let allowedBaggegeWeight = 20;

if (money > ticketPrice && isPassengerAdult && baggageWeight <= allowedBaggegeWeight) {
    console.log('You can buy a ticket');
} else if (money < ticketPrice) {
    console.log('You dont have enough money')
} else if (!isPassengerAdult) {
    console.log('You can not buy a ticket')
} else if (baggageWeight > allowedBaggegeWeight) {
    console.log('Your baggage is too heavy')
}