module.exports = function(application){

	application.get('/planos/lista', function(req, res){
		application.app.controllers.planos.planos(application, req, res);
	});

	application.get('/plano', function(req, res){
		application.app.controllers.planos.plano(application, req, res);
	});
};