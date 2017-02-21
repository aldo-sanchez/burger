var orm = require('../config/orm.js');

module.exports = {
  getAll: function(req, res){
    var array = ['burger_name', 'burgers'];
    function cb(data){
      res.send(data);
    };
    orm.selectAll(array, cb);
  }
}