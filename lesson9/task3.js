const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2018
};

const car2 = {
    brand: "Suzuki",
    model: "Vitara",
    owner: 2022
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);