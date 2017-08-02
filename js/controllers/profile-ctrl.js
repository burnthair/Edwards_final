// Add module and controller here.
var app = angular.module('profileModule');

app.controller('profileCtrl', function($scope, loginService) {
  $scope.userDetails = loginService.getProfile();
});
