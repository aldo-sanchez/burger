var orm = require('../config/orm.js');

module.exports = (app)=>{
  app.get('/api/all', (req, res)=>{
    var array = ['burger_name'];
    function cb(data){
      res.send(data);
    };
    orm.selectAll(array, cb);
  });
  
  app.post('api/all', (req, res)=>{

  });
};