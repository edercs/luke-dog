var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password: 'cear@ueg',
		database: 'cadastro_plano',
	});
}

module.exports = function() {
	return connMySQL;
}
		