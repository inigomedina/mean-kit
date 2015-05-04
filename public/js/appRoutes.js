angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/darwin', {
			templateUrl: 'views/darwin.html',
			controller: 'DarwinController'
		})

		.when('/dawkins', {
			templateUrl: 'views/dawkins.html',
			controller: 'DawkinsController'	
		});

	$locationProvider.html5Mode(true);

}]);
