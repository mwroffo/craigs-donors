const config = require('config');

const connectDB = async () => {
    try {
        // TODO: connect node to dynamodb
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;