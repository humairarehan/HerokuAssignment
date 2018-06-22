'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTrainingData = getTrainingData;

var _trainingManagementController = require('./trainingManagementController');

var trainingSessionManagement = _interopRequireWildcard(_trainingManagementController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getTrainingData(con, res) {

    var sql = 'CREATE TABLE IF NOT EXISTS users (id int(11) NOT NULL AUTO_INCREMENT,name varchar(100) NOT NULL,duration varchar(100) NOT NULL,PRIMARY KEY (id))';
    con.query(sql, function (err, result) {
        if (err) console.log('query err : ' + err);
        var sql = "select * from users order by id asc ";

        con.query(sql, function (err, result) {
            if (err) throw err;
            // trainingData=result;
            // return ;

            trainingSessionManagement.getTrainingSessionDetails(result, res);
        });
    });
}