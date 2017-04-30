var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var data = [
  {item: 'walk dog'},
  {item: 'sent email'},
];

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('todo', {data: data});
  })

  app.post('/', urlencodedParser, function (req, res) {
    if (req.body.item != '')
      data.push(req.body);
    res.send();
  });

  app.delete('/:item', function (req, res) {
    data = data.filter(function (item) {
      return !(item.item.trim() == req.params.item.trim());
    });
    res.send();
  })


}
