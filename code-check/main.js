var cron = require('node-cron');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


var connectionInfo = require('../db/db.js');
var connection = mysql.createConnection(connectionInfo);

const words =["rape", "attacked", "followed"];

//sunday
cron.schedule('5 8 * * 0', () => {
  console.log('running a task every week');
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("events", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
 
 function search(title,location,description){
  // if certain words come up tht are similar to other cases group them and set priority
  
 }
 
 function push(title,location,description,priority){
 }
