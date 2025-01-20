const express = require('express');
const router = express.Router();

/* Build a simple node application that listens on port 3000 and returns a response of "Hello World" when you visit http://localhost:3000 in your browser.*/  
router.get('/', (req, res, next) => {
  res.send('Hello World');
});

// Send a JSON object as a response to browser
router.get('/greet', (req, res, next) => {
    const data = {
        greeting: 'Hello bro!',
    }
    res.json(data);
});

// Send a JSON object as a response to browser
router.get('/info', (req, res, next) => {
    const data = {
        name: 'John Doe',
        age: 30,
        isStudent: true,
    };
    res.json(data);
});

/* Templating engine section*/

// Send a HTML file as a response to browser
router.get('/home', (req, res, next) => {
    res.render('home',  null);
});

module.exports = router;