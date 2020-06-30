const express = require('express');
const path = require('path');

const app = express();
app.get('/hello', (req, res) => {
    res.send('hello hello\n');
});

// link to backend
app.use('/api', require('./routes/api'));

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `listening...`
    );
});