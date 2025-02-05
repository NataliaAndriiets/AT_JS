

const car1 = {
    brand: "Toyota",
    model: "Auris",
    year: 2014
}

const car2 = {
    brand: "Ford",
    model: "Mustang",
    owner: 2024
}

const car3 = {...car1, ...car2}
console.log(car3);
