module.exports = function(app, db) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/todos', (req, res) => {
    res.send('Hi');
  });

  app.post('/todos', (req, res) => {
    const todo = { text: req.body.body, title: req.body.title };
    console.log(todo);
    res.send('hello');
  });
}