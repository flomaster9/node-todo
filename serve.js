var express = require('express');
var todoController = require('./controllers/todoController.js');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public/'));

todoController(app);

app.listen(port);
console.log('app listing on port %d', port);
