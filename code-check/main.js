var cron = require('node-cron');
 
var connectionInfo = require('../db/db.js');
var connection = mysql.createConnection(connectionInfo);

const words =["rape", "attacked", "followed"];

//sunday
cron.schedule('5 8 * * 0', () => {
  console.log('running a task every week');
  connection.query(`Select * FROM events WHERE location=$req.location`, function(err,result){
    if(err) throw err;
    
    // read through data and look for key words
   
   for(var i =0; i<result.length; i++){
    
   }
  });
});
 
 function search(title,location,description){
  // if certain words come up tht are similar to other cases group them and set priority
  
 }
 
 function push(title,location,description,priority){
 }
