define([
	'angular',
	'angular-ui-route',

	'./controllers/index',
	'./directives/index',
	'./services/index'
], function(ng) {
	return ng.module('app', [
		'ui.router',
		
		'app.controllers',
		'app.directives',
        'app.services'
	]);
});