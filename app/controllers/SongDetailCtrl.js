define([
  'angular',
  'angularRoute',
  'firebase'

], function(angular, route, firebase) {

  angular
  .module('musicApp.SongDetailCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs/:id', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl'
    });
  }])

.controller("SongDetailCtrl", 
  ["$scope",
  "$firebaseObject",
  "$routeParams",
  function($scope, $firebaseObject, $routeParams) {
    console.log("routeParams", $routeParams);
   
    var ref = new Firebase("https://luminous-fire-170.firebaseio.com/songs/"+ $routeParams.id);
    $scope.selectedSong = $firebaseObject(ref);
    console.log("scope.songs", $scope.songs);
    
  }
]);
});



