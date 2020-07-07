// craigs-donors/api/cause.js
// provide promise-based endpoints to database.
// usage: `const cause = require('./api/cause');
// standard promise.then syntax:
// `cause.getById( ... ).then( ... )` etc.
// Alternatively use async/await syntax:
// `await org.getOrgById( ... );`

const api = require('../utils/api');
const AWS = require('aws-sdk');
const connectDB = require('../db');
connectDB();
const docClient = new AWS.DynamoDB.DocumentClient();

// @desc get cause by primary partition key
const getById = async (causeName) => {
    try {
        const options = {
            params: {
                pk: causeName
            }
        };
        return await api.get('/cause', options);
    } catch (err) { throw err }
};

// @desc get array of all  causes
const getAll = async () => {
    try {
        const params = {
            TableName: 'cause'
        };
        return await docClient.scan(params).promise();
    } catch (err) { throw err }
};

module.exports = {
    getById,
    getAll
};