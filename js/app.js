define([
	'angular',
	'angular-ui-route',

	'./controllers/index',
	'./directives/index'
], function(ng) {
	return ng.module('app', [
		'ui.router',
		
		'app.controllers',
		'app.directives'		
	]);
});