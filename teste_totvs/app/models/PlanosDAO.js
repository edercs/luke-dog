function PlanosDAO(connection) {
	this._connection = connection;
}

PlanosDAO.prototype.getPlanos = function(callback) {
	this._connection.query('select * from planos', callback);
}

PlanosDAO.prototype.getPlano = function(callback) {
	this._connection.query('select * from planos where codigo = 1', callback);
}

PlanosDAO.prototype.salvarPlano = function(plano, callback) {
	console.log(plano);
	this._connection.query('insert into planos set ? ', plano, callback);
}

module.exports = function(){
	return PlanosDAO;
}