// craigs-donors/api/charity.js
// provide promise-based endpoints to database.
// usage: `const charity = require('./api/charity');
// `charity.getById( ... ).then( ... )` etc.
// alternatively `await org.getOrgById( ... );`

'use strict';
const api = require('../client/src/utils/api');
const AWS = require('aws-sdk');
const connectDB = require('../config/db');
connectDB();
const docClient = new AWS.DynamoDB.DocumentClient();

// @desc get charity as json from db
// @param orgId: number, a primary partition key
const getById = async (orgId) => {
    try {
        const options = {
            params: {
                pk: orgId
            }
        };
        return await api.get('/charity', options);
    } catch (err) { throw err }
};

// @desc Get array of all charities in db.
const getAll = async () => {
    try {
        const params = {
            TableName: 'charity'
        };
        return await docClient.scan(params).promise();
    } catch (err) { throw err }
};

module.exports = {
    getById,
    getAll
};