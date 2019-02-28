var cron = require('node-cron');
 
//sunday
cron.schedule('5 8 * * 0', () => {
  console.log('running a task every minute');
  
});
