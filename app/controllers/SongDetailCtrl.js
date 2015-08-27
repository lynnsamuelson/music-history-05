app.controller("SongDetailCtrl", ["$scope", "$routeParams", "song-list",
  function($scope, $routeParams, song_storage) {
    $scope.selectedSong = {};
    $scope.songsId = $routeParams.songsId;

    console.log("$scope.songId", $scope.songsId);

    // song_storage.then(
    //   function(promiseResolutionData) {
    //     console.log("promiseResolutionData", promiseResolutionData);

    //     $scope.selectedSong = promiseResolutionData.filter(function(song) {
    //       return songs.id === parseInt($scope.songsId);
    //     })[0];

    //     console.log("$scope.selectedSong", $scope.selectedSong);
    //   },
    //   function(promiseRejectionError) {
    //     console.log("error", promiseRejectionError);
    //   }
    // );
  }
]);



