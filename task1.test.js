


const axios = require('axios');


test('test link error', async () => {
    let response = await axios.post(`https://jjsonplaceholder.typicode.com/comments`,
        {
            "postId": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "555555555555555"
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.status === 200) {
            }
            else {
                throw new Error("The link is not correct");
            }
            return 'Valid input';
        }).catch(error => {
            console.log(error)
        });
});