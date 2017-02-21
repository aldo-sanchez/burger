var orm = require('../config/orm.js');

module.exports = (app)=>{
  app.get('/', (req, res)=>{
    var columns = ['burger_name', 'devoured']
    var array = [columns, 'burgers'];
    function cb(data){
      res.render('index', {data: data});
    };
    orm.selectAll(array, cb);
  });

  app.post('/api/all', (req, res)=>{
    var array = ['burgers', 'burger_name', 'my burger :)'];
    function cb(data){
      res.end();
    };
    orm.insertOne(array, cb);
  });
};