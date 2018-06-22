'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trainingApi = trainingApi;

var _dbFetchDataController = require('./dbFetchDataController');

var dbData = _interopRequireWildcard(_dbFetchDataController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function trainingApi(app, con) {

  app.get('/getApiDBDetails', function (req, res) {
    dbData.getTrainingData(con, res);
  });
  var server = app.listen(3000, function () {

    var host = "localhost";
    var port = server.address().port;

    console.log("Driving Training Session Management Listening at http://%s:%s", host, port);
  });
}