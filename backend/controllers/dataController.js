var connectionInfo = require('../db/db.js');
var mysql      = require('mysql');
var connection = mysql.createConnection(connectionInfo);

exports.list_all = function(req, res) {
  connection.query('SELECT * FROM events;', function(err,result){
    if(err) throw err;
    
    return result;
  });
};

exports.create = function(req, res) {
   connection.query(`INSERT INTO events (title, location, description) VALUES ($req.title, $req.location, $req.description);`, function(err,result){
    if(err) throw err;
    
    return "Success";
  });
};

exports.read = function(req, res) {
   connection.query(`Select * FROM events WHERE location=$req.location`, function(err,result){
    if(err) throw err;
    
    return result;
  });
};

exports.update = function(req, res) {
   connection.query(`UPDATE events SET location=$req.location, description=$req.description WHERE title=$req.title;`, function(err,result){
    if(err) throw err;
    
    return "Success";
  });
};

exports.delete = function(req, res) {
    connection.query(`DELETE FROM events WHERE title=$req.title;`, function(err,result){
    if(err) throw err;
    
    return "Success";
  });
};
