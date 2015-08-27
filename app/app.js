var app = angular.module("musicApp", ['ngRoute', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/songs', {
      templateUrl: 'partials/song-list.html',
      controller: 'musicCtrl'
    }).
    when('/songs/new', {
      templateUrl: 'partials/addSongForm.html',
      controller: 'addSongCtrl'
    }).
    when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl'
    }).
    otherwise({
      redirectTo: '/songs'
    });
  }]);


