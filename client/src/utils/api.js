const axios = require('axios');

const api = axios.create({
    baseURL: 'https://iws9pqk8ui.execute-api.us-east-1.amazonaws.com/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = api;