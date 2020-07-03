const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// initialize dynamodb
connectDB();

// link to backend
app.use('/api', require('./routes/api'));

// init test route
app.get('/hello', (req, res) => {
    res.send('hello world\n');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express listening on port ${PORT}`));