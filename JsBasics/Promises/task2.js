//В цьому завданні вам потрібно використовувати then() та catch ()
//для обробки результатів виконання промісу

//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//Copy code
//    < https://jsonplaceholder.typicode.com/todos/1>

//Функція повинна повертати як результат Promise що повертає об’єкт todo

//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//Copy code
//    < https://jsonplaceholder.typicode.com/users/1>
//Функція повинна повертати як результат Promise що повертає об’єкт user
//Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з
//викликами функцій з п.п. 1 - 2. Присвойте значення отримані від цих виразів до змінних




let prom1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log('Todo:', data);
            resolve(data);
        })
        .catch(error => {
            console.error('Error:', error);
            reject("Failure");
        });
   
})


//2

let prom2 = new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            console.log('User:', user);
            resolve(user);
      })
        .catch(error => {
             console.error('Error:', error);
              reject("Failure");
       });  
})


////3


Promise.all([prom1, prom2]).then(values => {
  console.log(values);
});


Promise.race([prom1, prom2]).then(value => {
   console.log(value);
});


