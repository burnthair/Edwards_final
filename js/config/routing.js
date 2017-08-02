// Add module here.
var app = angular.module('profileModule');
// Routing goes here.
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'loginCtrl',
      templateUrl: '././partials/login.html'
    })
    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: '././partials/profile.html'
    })
    .otherwise({redirectTo: '/login'});
});
