const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const buildPath = path.join("/build", 'index.html');

 // Serve any static files
app.use(express.static(path.join('build')));
 // Handle React routing, return all requests to React app
app.get('*', function(req, res) {
     res.sendFile(path.join( 'build', 'index.html'));
   });

 app.listen(port, () => {
    console.log('Server Started');
 });
