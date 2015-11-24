angular.module('ionicApp.controllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('ScheduleTabCtrl', ['$scope', '$http', function($scope,$http) {
      $http.get("schedule.json")
      .success(function (response) 
      {
       $scope.names = response;
      });