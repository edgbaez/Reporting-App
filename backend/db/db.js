var mysql = require('mysql');

if (process.env.VCAP_SERVICES) {
    var services = JSON.parse(process.env.VCAP_SERVICES);
    var mysqlConfig = services["p-mysql"];

    if (mysqlConfig) {
        var node = mysqlConfig[0];
        connectionInfo = {
            host: node.credentials.hostname,
            port: node.credentials.port,
            user: node.credentials.username,
            password: node.credentials.password,
            database: node.credentials.name
        };
    }
}else{
    connectionInfo = {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'test',
        insecureAuth : true
    };
}
exports.connectionInfo = connectionInfo;
