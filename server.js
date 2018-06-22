'use strict';

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _trainingApi = require('./Controller/trainingApi.js');

var trainingApi = _interopRequireWildcard(_trainingApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('./DriverTrainingManagementFrontEnd'));

var con = _mysql2.default.createConnection({
	host: "sql12.freemysqlhosting.net",
	user: "sql12243435",
	password: "gXwsD8ZwYg",
	database: "sql12243435",
	port: "3306"
});
trainingApi.trainingApi(app, con);
con.connect(function (err) {
	if (err) {
		console.log('error is : ' + err);
	} else {
		console.log("connected to the mysql database hosted on freemysqlhosting.net ");
	}
});