//Створіть функцію яка приймає два параметри: width і height.

//Усередині функції обчисліть площу прямокутника, перемноживши width на height
//та поверніть результат з функції.

//Викличте вашу функцію з аргументами(наприклад 5 і 10 і виведіть результат(площу прямокутника) в консоль.

//Реалізуйте функцію трьома способами(function declaration, function expression, arrow function)


//1) function declaration
function calculateSquaire(width, height) {
const squaire = width * height;
return squaire
}
const result = calculateSquaire(4, 8)

console.log(result);


//2) function Expression

const calculateSquare = function(width, height)
{ const square = width * height;
return square
}

console.log(calculateSquare(12, 18));

//3) Arrow function

const calculateSquare = (width, height) => width * height;

const result = calculateSquare(89, 78)
console.log(result);
