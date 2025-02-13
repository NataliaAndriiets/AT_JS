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


async function asyncAwaitFunction() {
    const results = await Promise.all([prom1, prom2]);
    console.log(results[0]);
    console.log(results[1]);
}
asyncAwaitFunction();