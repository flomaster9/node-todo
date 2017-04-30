var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://test:test@ds127341.mlab.com:27341/todos');

var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema);

// var data = [
//   {item: 'walk dog'},
//   {item: 'sent email'},
// ];

module.exports = function (app) {

  app.get('/', function (req, res) {
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render('todo', {data: data});
    })
  })

  app.post('/', urlencodedParser, function (req, res) {
    if (req.body.item != '')
      Todo(req.body).save(function (err, data) {
        if (err) throw err;
        res.send();
      })
  });

  app.delete('/:item', function (req, res) {
    Todo.find({item: req.params.item.trim()}).remove(function (err, data) {
      if (err) throw err;
      res.send();
    })
  })


}
