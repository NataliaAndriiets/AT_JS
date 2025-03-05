
const axios = require('axios');

async function getFirstUserSurname() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data[0].surname;
};

module.exports = getFirstUserSurname;
