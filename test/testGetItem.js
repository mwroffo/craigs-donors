// filename: testGetItem.js
// usage: `node test/testGetItem`
// purpose: perform a test fetch of a row from a table in database.
// update: ehh, just do all kinds of test requests from here.

const api = require('../client/src/utils/api');
const AWS = require('aws-sdk');
const connectDB = require('../config/db');
connectDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const charity = require('../client/src/api/charity');
const cause = require('../client/src/api/cause');
// ------------------------------------------------------
// Configure docClient to get some row in some table in your database:
// YOU SHOULD EDIT these fields as appropriate.
const params = {
    TableName: "charity",
    Key: {
        "charityName": "The Battery Conservancy", 
        "orgID": 6026
    }
};
// ------------------------------------------------

// docClient.get(params, (err, data) => {
//     if (err) {
//         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//         // return data; TODO
        
//     }
// });

// org.docClientGet(params).then(data => console.log(data));

let options = {
    params: {
        pk: 6026
    }
};
// docClient.get(params).promise().then(data => console.log(data));
options = {
    params: {
        tableName: "charity"
    }
};
// api.get('/charity', options).then(res => console.log(res.data));

// org.getOrgById(6026).then(data => console.log(data));

// org.getOrgs().then(data => console.log(data));

// charity.getById(6026).then(data => console.log(data));

charity.getAll().then(Items => {
    console.log(Items[6])
});

// cause.getById('COVID19').then(data => console.log(data));
// cause.getAll().then(data => console.log(data));