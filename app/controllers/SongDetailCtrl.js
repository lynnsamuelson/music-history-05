app.controller("SongDetailCtrl", 
  ["$scope",
  "$routeParams",
   "simple_storage",
  "song_storage",
  
  function($scope, $routeParams, simple_storage, song_storage) {
    $scope.selectedSong = {};
    $scope.songId = $routeParams.songId;

    //console.log("simple_storage.getJunk(\"garbage\")", 
      simple_storage.getJunk("garbage");

    //console.log("$scope.songId", $scope.songId);

    song_storage.then(
      function(promiseResolutionData) {
        //console.log("promiseResolutionData", promiseResolutionData);

        $scope.selectedSong = promiseResolutionData.filter(function(song) {
          return song.id === parseInt($scope.songId);
        })[0];

        //console.log("$scope.selectedSong", $scope.selectedSong);
      },
      function(promiseRejectionError) {
        //console.log("error", promiseRejectionError);
      }
    );
  }
]);


