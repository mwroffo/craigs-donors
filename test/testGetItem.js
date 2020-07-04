// filename: testGetItem.js
// usage: `node test/testGetItem`
// purpose: perform a test fetch of a row from a table in database.

const api = require('../client/src/utils/api')
const AWS = require('aws-sdk');
const connectDB = require('../config/db');
connectDB();

const docClient = new AWS.DynamoDB.DocumentClient();

// ------------------------------------------------------
// Configure docClient to get some row in some table in your database:
// YOU SHOULD EDIT these fields as appropriate.
const params = {
    TableName: "charity",
    Key: {
        "charityName": "The Battery Conservancy", 
        "orgID": 6026
    }
}
// ------------------------------------------------

docClient.get(params, function (err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});

api.get('/cause', {
    params: {
        pk: 'COVID19'
    }
}).then(res => {
    console.log(res.data);
});