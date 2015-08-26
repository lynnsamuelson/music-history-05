app.controller("musicCtrl", function($scope, $q) {
  $scope.title = "Music List";
  $scope.songs = "";
  $scope.music = "";
  $scope.newSong = {
    name: "",
    artist: ""
  };

  function getMusicList() {
      //perform some asynchronous operation, resole or reject the promise whe appropriote
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
      $scope.songs = promiseResolutionData;
  },
    function(error) {
    console.log("error", error);
  });

  $scope.killMusic = function(songs) {
    var musicIndex = $scope.songs.indexOf(songs);
    if (musicIndex >= 0) {
      $scope.songs.splice(musicIndex, 1);
    }
  };

  function getMoreMusic() {
      //perform some asynchronous operation, resole or reject the promise whe appropriote
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


//push new songs into the object with a for loop
  getMoreMusic()
  .then(
    function(promiseResolutionData) {
      for (var i=0; i<promiseResolutionData.length; i++){
        $scope.songs.push(promiseResolutionData[i]);
      }
  },
    function(error) {
    console.log("error", error);
  });

  $scope.killMusic = function(songs) {
    var musicIndex = $scope.songs.indexOf(songs);
    if (musicIndex >= 0) {
      $scope.songs.splice(musicIndex, 1);
    }
  };




});