var orm = require('../config/orm.js');

module.exports = (app)=>{
  app.get('/api/all', (req, res)=>{
    var array = ['burger_name', 'burgers'];
    function cb(data){
      res.send(data);
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