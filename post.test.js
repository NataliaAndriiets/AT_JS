const axios = require('axios');
//test1
test('place new user in the table', async () => {

    let response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        });

         console.log("Response Status: ", response.status);
         console.log("Rwaponaw Data :", response.data);
         expect(response.status).toEqual(201);
         expect(response.data.email).toEqual("Shanna@melissa.tv");
});

//test2

test('Post new comment successfully', async () => {

    let response = await axios.post(
        `https://jsonplaceholder.typicode.com/comments`,
        {
            "postId": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "555555555555555"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    console.log("Response Status: ", response.status);
    console.log("Rwaponaw Data :", response.data);
    expect(response.status).toEqual(201); 
    expect(response.data.name).toEqual("id labore ex et quam laborum");

 });

//test3

test('Post new photo, happy path', async () => {

    let response = await axios.post(
        `https://jsonplaceholder.typicode.com/photos`,
        [
            {
                "albumId": 1,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            },
            {
                "albumId": 1,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
            },
        ],
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    console.log("Response Status: ", response.status);
    console.log("Rwaponaw Data :", response.data);
    expect(response.status).toEqual(201);
    //expect(response.data.url).toEqual("https://via.placeholder.com/600/f66b97");


});













