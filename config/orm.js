// require db connection
var connection = require('./connection.js');

module.exports = {
  selectAll: function(array, cb){
    connection.query('SELECT ?? FROM burgers', array, (err, data)=>{
      if(err){throw err};
      cb(data);
    });
  },
  insertOne: function(){},
  updateOne: function(){}
};