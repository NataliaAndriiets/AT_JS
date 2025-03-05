const axios = require('axios');


test('test headers', async () => {
    let response = await axios.get(
            'https://httpbin.org/get',
            {
                params: { answer: 42 },
                headers: {
                    "Content-Type": "Cookie"
                }
            }
        )
        .then(response => {
            if (response.status === 200) {
                console.log(response.data.headers["Content-Type"]);
                console.log(response.data.args.answer);
            }
            else {
                throw new Error("The link is not correct");
            }
            return 'Valid header';
        })
        .catch(error => {
            console.log(error)
        });
});
