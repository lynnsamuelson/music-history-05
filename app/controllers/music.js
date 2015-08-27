app.controller("musicCtrl", function($scope, $q) {
  $scope.title = "Music List";
  $scope.songs = [];
  $scope.theMusic = "";
  $scope.newSong = {
    name: "",
    artist: ""
  };

  $scope.songsSearchText = "";
  
  $scope.killMusic = function(songs) {
    var musicIndex = $scope.songs.indexOf(songs);
    if (musicIndex >= 0) {
      $scope.songs.splice(musicIndex, 1);
    }
  };

  function getMusicList() {
      return $q(function(resolve, reject) {

        $.ajax({
          url: "./../data/songs.json"
        })
        .done(function(response) {
          resolve(response.songs);
        })
        .fail(function(xhr,status, error) {
          reject(error);
        });
      });
    }
  
  getMusicList()

  .then(
    function(promiseResolutionData) {
      for (var i=0; i<promiseResolutionData.length; i++){
        $scope.songs.push(promiseResolutionData[i]);
      }
  },
    function(error) {
    console.log("error", error);
  });

  function getMoreMusic() {
      return $q(function(resolve, reject) {
        $.ajax({
          url: "./../data/songs2.json"
        })
        .done(function(response) {
          resolve(response.songs);
        })
        .fail(function(xhr,status, error) {
          reject(error);
        });
      });
    }
  getMoreMusic()
//pushes new songs into the object
  .then(
    function(promiseResolutionData) {
      for (var i=0; i<promiseResolutionData.length; i++){
        $scope.songs.push(promiseResolutionData[i]);
      }
  },
    function(error) {
    console.log("error", error);
  });
});