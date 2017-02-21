// require db connection
var connection = require('./connection.js');

module.exports = {
  selectAll: function(array, cb){
    connection.query('SELECT ?? FROM ??', array, (err, data)=>{
      if(err){throw err};
      cb(data);
    });
  },

  insertOne: function(array, cb){
    connection.query('INSERT INTO ??(??) VALUES(?)', array, (err, data)=>{
      if(err){throw err};
      cb(data);
    });
  },
  updateOne: function(array, cb){
    connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', array, (err, data)=>{
      if(err){throw err};
      cb(data);
    })
  }
};