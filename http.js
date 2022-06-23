const axios = require('axios');

const fetchData = () => {
    console.log('Fetching API...')
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.data)
}

module.exports = fetchData;