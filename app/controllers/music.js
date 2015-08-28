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
    console.log("scope.songs.song", $scope.songs);

    $scope.messages = $firebaseArray(ref);
    $scope.deleteSong = function(songId) {
        ref.child(songId).remove();
    };
  }
]);
 

