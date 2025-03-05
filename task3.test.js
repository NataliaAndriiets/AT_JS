//

const getFirstUserSurname = require('./users');

const axios = require('axios');

jest.mock('axios');

//test1
test('returns the Surname of the first user', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                surname: 'Miles'
            },
            {
                userId: 1,
                id: 2,
                surname: 'Sequel'
            }
        ]
    });

    const surname = await getFirstUserSurname();
    expect(surname).toEqual('Miles');
});


//test2
test('Returns the error', async () => {
    let response = await axios.post.mockResolvedValue(new Error("Surname Error"))

    expect(await response())
});

    
    
