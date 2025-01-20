/* Modules section */
const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');

/* Express configuration section */
const app = express();
// Setting the views directory or setting path for the views
app.set('views', path.join(__dirname, 'views'));
// Setting the view engine
app.set('view engine', 'mustache');
// Register custom Mustache template engine using Hogan middleware from Twitter for Express
app.engine('mustache', hoganMiddleware.__express);
// Allow express to find public directory or Setting the public directory or setting path for the public directory
// Connecting static assets directory. This will allow us to serve static files like images, CSS, and JavaScript files.
app.use(express.static(path.join(__dirname, 'public')));

/* Routes section */

// Importing the main router
const mainRouter = require('./routes/main');
app.use('/', mainRouter);


/* Server section*/

/* 
# Start the server - first option
app.listen(3000);  // 3000, 8080, 5000, 8000, 4000, 7000, 6000
console.log('Server is running on http://localhost:3000');
*/

/* start the server - second option*/
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

