const users = [
    { name: "Олександр", email: "alex@example.com", age: 25 },
    { name: "Анна", email: "anna@example.com", age: 22 },
    { name: "Ігор", email: "igor@example.com", age: 30 }
];

for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
