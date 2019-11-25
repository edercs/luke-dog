module.exports.add_plano = function(application, req, res) {
	res.render("admin/add_plano", {validacao : {}, plano : {}});
}

module.exports.plano_salvar = function(application, req, res) {
	var plano = req.body;
	
	var connection = application.config.dbConnection();
	var planosModel = new application.app.models.PlanosDAO(connection);

	planosModel.salvarPlano(plano, function(error, result){
		res.redirect('/planos');
	});
}