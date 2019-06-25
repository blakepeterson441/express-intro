// Get (require in) express - this gives us a function
// no ./ within 'express' due to 'express' being in node_modules

const express = require('express');

const app = express();
const port = 5000;

// Telling express where to find our static files
// things like html, css, JS ... all files
// tells your app to use certain thing
// file contents are static - ex: html
app.use( express.static('server/public') );

// Tell our express server to start listening for requests
// => basically calling a function
// never => in jQuery

app.listen( port, () => {
    console.log(`server is listening on port ${port}`);
})