var todos = document.querySelector('#todo');
var form = todos.querySelector('#todo-form');

var req = new XMLHttpRequest();

req.onreadystatechange = function() {
  if (req.readyState == 4)
    document.location.reload();
};

todos.addEventListener('click', function (event) {
  var target = event.target.closest('li');
  if (!target)
    return;
    req.open("DELETE", '../' + target.textContent, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var item = this.querySelector('#new-todo').value;
    req.send();
})

form.addEventListener('submit', function (event) {
  event.preventDefault();
  req.open("POST", '../', true);
  req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var item = this.querySelector('#new-todo').value;
  req.send('item='+item);
})
