app.controller("addSongCtrl", ['$scope', '$firebaseArray',
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://luminous-fire-170.firebaseio.com/songs");
    $scope.messages = $firebaseArray(ref);
    $scope.addSong = function() {
      $scope.messages.$add({
        song: $scope.newSong.name,
        artist: $scope.newSong.artist,
        album: $scope.newSong.album,
        genre: $scope.newSong.genre
      });
    };

  }
]);