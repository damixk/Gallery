const Connect = require('../schema/ConnectSchema');
const mongoErrors = require('../handlers/mongoErrorHandler');
let connection = {};

connection.add = function(ip){
    var model = new Connect();

        model.ip = ip;

        //Store in mongo
        model.save();
}

module.exports = connection;
