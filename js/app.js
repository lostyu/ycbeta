define([
	'angular',
	'angular-ui-route',
	'angular-touch',

	'./controllers/index',
	'./directives/index',
	'./services/index'
], function(ng) {
	return ng.module('app', [
		'ui.router',
        'ngTouch',
		
		'app.controllers',
		'app.directives',
        'app.services'
	]);
});