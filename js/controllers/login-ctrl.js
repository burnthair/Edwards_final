// Add module and controller here.
var app = angular.module('profileModule');

app.controller('loginCtrl', function($scope, loginService, $location) {
  $scope.login = function(userInput) {
    loginService.checkLogin(userInput);
    // $location.path('/profile');
  };
});
