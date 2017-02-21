// require mysql and keys
var mysql = require('mysql');
var keys = require('./keys.js');

var connection = mysql.createConnection(keys);

connection.connect((err)=>{
  if(err){throw err};
  console.log('Connection as ID: ' + connection.threadId);
});

module.exports = connection;