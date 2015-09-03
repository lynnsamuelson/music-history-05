define([
  'angular',
  'angularRoute',
  'firebase'

], function(angular, route, firebase) {

  angular
  .module('musicApp.music', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs', {
      templateUrl: 'partials/song-list.html',
      controller: 'musicCtrl'
    });
  }])
  .controller("musicCtrl", 
    ["$scope",
    "$firebaseArray",
    function($scope, $firebaseArray) {
      $scope.title = "Music List";
      $scope.songs = [];
      $scope.theMusic = "";
      $scope.newSong = {
        name: "",
        artist: "",
        album: "",
        genre: ""
      };

      $scope.songsSearchText = "";

      var ref = new Firebase("https://luminous-fire-170.firebaseio.com/songs");
      $scope.songs = $firebaseArray(ref);
      console.log("scope.songs", $scope.songs);
      // console.log("scope.songs.song", $scope.songs);

      $scope.messages = $firebaseArray(ref);
      $scope.deleteSong = function(songId) {
          ref.child(songId).remove();
      };
    }
  ]);
});
 

