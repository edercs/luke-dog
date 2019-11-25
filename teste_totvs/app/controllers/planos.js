module.exports.planos = function(application, req, res) {
	var connection = application.config.dbConnection();
	var planosModel = new application.app.models.PlanosDAO(connection);

	planosModel.getPlanos(function(error, result){
		res.render("planos/lista", {planos : result});
	});
}

module.exports.plano = function(application, req, res){
	var connection = application.config.dbConnection();
	var planosModel = new application.app.models.PlanosDAO(connection);

	planosModel.getPlano(function(error, result){
		console.log(result);
		res.render("planos/plano", {plano : result});
	});

	
}