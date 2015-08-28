app.controller("SongDetailCtrl", 
  ["$scope",
  "$routeParams",
  "$firebaseObject",
  
  function($scope, $routeParams, $firebaseObject) {
   
    var ref = new Firebase("https://luminous-fire-170.firebaseio.com/songs/"+ $routeParams.songId);
    $scope.selectedSong = $firebaseObject(ref);
    
  }
]);


