
define ([
  'angular',
  'angularRoute',
  'angularfire',
  'controllers/music',
  'controllers/addSongCtrl',
  'controllers/SongDetailCtrl',

], function (angular, angularRoute, angularfire, music, SongDetailCtrl, addSongCtrl) {

  return angular.module('musicApp', 
  ['ngRoute',
   'firebase',
   'musicApp.music',
   'musicApp.addSongCtrl',
   'musicApp.SongDetailCtrl'
   ]).

  config(['$routeProvider', function($routeProvider) {
   $routeProvider
   .otherwise({redirectTo: '/songs'});

  }]);
});


    // when('/songs', {
    //   templateUrl: 'partials/song-list.html',
    //   controller: 'musicCtrl'
    // }).
    // when('/songs/new', {
    //   templateUrl: 'partials/addSongForm.html',
    //   controller: 'addSongCtrl'
    // }).
    // when('/songs/:songId', {
    //   templateUrl: 'partials/song-detail.html',
    //   controller: 'SongDetailCtrl'
    // }).
    // otherwise({
    //   redirectTo: '/songs'
    // });

