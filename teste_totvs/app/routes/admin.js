module.exports = function(application){
	
	application.get('/add_plano', function(req, res){
		application.app.controllers.admin.add_plano(application, req, res);
	});

	const { check, validationResult } = require('express-validator');
	application.post('/planos/salvar', 
		[
		   check('descricao', 'Descricao deve conter de 10 a 100 caracteres').isLength({ min: 10, max: 100 }),
		   check('data_inicio', 'Data de início é obrigatório').not().isEmpty(),
		   check('data_final', 'Data final é obrigatório').not().isEmpty(),
		   check('valor_parcela', 'Valor da parcela é obrigatório').not().isEmpty()

		], function(req, res){
			var plano = req.body;

			var erros = validationResult(req);
			if (!erros.isEmpty()) {
				res.render("admin/add_plano", {validacao : erros.array(), plano : plano });
				return;
			}

			application.app.controllers.admin.plano_salvar(application, req, res);
	});
};