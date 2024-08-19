// Create web server
// npm install express
// npm install body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Post a new comment
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(req.body);
});

// Listen to port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});