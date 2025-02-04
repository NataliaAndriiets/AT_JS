

const users = [
    { name: "Peter", email: "pti@gmail.com", age: 10 },
    { name: "Joane", email: "jojo@gmail.com", age: 45 },
    { name: "Mike", email: "mroter@gmail.com", age: 40 }
];

for (const user of users) {
    console.log(user);
}

let [user1, user2] = users;
console.log(user1);

