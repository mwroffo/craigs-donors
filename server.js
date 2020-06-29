const express = require('express');
const app = express();

// const { IonReactRouter } = require('@ionic/react-router');

// app.get('/', (req,res) => {
//     res.redirect('/home');
// })

// app.get('/home', (req, res) => {
//     res.send('hello home\n');
//     // TODO yattish's landing page code
// });

app.get('/hello', (req, res) => {
    res.send('hello hello\n');
});

// app.use(IonReactRouter(require('./src/routing')))

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `listening...`
    );
});