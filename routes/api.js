'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/home');
})
router.get('/home', (req, res) => {
    res.send('hello world\n');
    // TODO yattish's landing page code
});


module.exports = router;