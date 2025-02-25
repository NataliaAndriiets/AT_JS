const axios = require('axios');


//test get 1

test("Get all todos list", async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',

        {
            "userId": 1,
            "title": "et porro tempora",
            "completed": true
         },
        {
            headers: {
            'Content-Type': 'application/json',
              },
        });
    console.log(response.data);
    expect(response.status).toEqual(200);
    });


//test get 2

test("Get all todos list", async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
        {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    console.log(response.data);
    expect(response.status).toEqual(200);
});







