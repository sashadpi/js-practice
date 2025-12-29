const person = {
    firstName: "Анна",
    lastName: "Іваненко",
    age: 25
};

person.email = "anna.ivanenko@example.com";

delete person.age;

console.log(person);
