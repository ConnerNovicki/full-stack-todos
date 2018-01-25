const storage = require('node-persist');

module.exports = function(app, db) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    storage.initSync()
    next();
  });

  app.get('/todos', (req, res) => {
    let todos = storage.getItemSync('todos');
    if (typeof todos === 'undefined') {
      storage.setItemSync('todos', []);  
      todos = storage.getItemSync('todos');
      storage.setItemSync('currId', 0);
    }

    res.send(todos);
  });

  app.post('/todos', (req, res) => {
    const todo = req.body;

    //TODO this should be req.body.name
    const name = Object.keys(req.body)[0];
    const dueDate = Object.keys(req.body)[2];

    let todos = storage.getItemSync('todos');
    const id = todos.length;

    const newTodo = { name, dueDate, id, isComplete: false };

    todos.push(newTodo);

    storage.setItemSync('todos', todos);
    res.send(newTodo);
  });

  app.patch('/todos/:id', (req, res) => {
    const id = req.param('id');
    const prop = Object.keys(req.body)[0];
    const val = req.body[prop] === 'true' ? true : false;
    let todos = storage.getItemSync('todos');
    todos[id-2][prop] = val;
    storage.setItemSync('todos', todos);
    res.send(todos[id]);
  })
}