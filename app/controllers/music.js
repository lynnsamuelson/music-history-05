app.controller("musicCtrl", 
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  function($scope, $routeParams, $firebaseArray) {
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

    $scope.killMusic = function(songs) {
      var musicIndex = $scope.songs.indexOf(songs);
      if (musicIndex >= 0) {
        $scope.songs.splice(musicIndex, 1);
      }
    };

  }
]);
 

