var connectionInfo = require('../db/db.js');

var connection = mysql.createConnection(connectionInfo);

exports.list_all = function(req, res) {
  connection.query(req, function(err,result){
    if(err) throw err;
    
    return result;
  }
};

exports.create = function(req, res) {
   connection.query(req, function(err,result){
    if(err) throw err;
    
    return "Success";
  }
};

exports.read = function(req, res) {
   connection.query(req, function(err,result){
    if(err) throw err;
    
    return result;
  }
};

exports.update = function(req, res) {
   connection.query(req, function(err,result){
    if(err) throw err;
    
    return "Success";
  }
};

exports.delete = function(req, res) {
    connection.query(req, function(err,result){
    if(err) throw err;
    
    return "Success";
  }
};
