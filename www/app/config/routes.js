app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/components/login/login.html',
			controller: 'LoginController',
		})
		.state('register', {
			url: '/register',
			templateUrl: 'app/components/register/register.html'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/components/dashboard/dashboard.html',
			controller: 'DashboardController'
		})
		.state('classroom', {
			url: '/dashboard/:classroomId',
			templateUrl: 'app/components/classroom/classroom.html',
			controller: 'ClassroomController'
		})
		.state('control', {
			url: 'dashboard/control-panel',
			templateUrl: 'app/components/control/control.html',
			controller: 'ControlPanelController'
		})
});