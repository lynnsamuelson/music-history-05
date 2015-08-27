app.controller("musicCtrl", 
  ["$scope",
  "$routeParams",
  "song_storage",
  function($scope, $q, song_storage) {
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


    song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });
    $scope.killMusic = function(songs) {
      var musicIndex = $scope.songs.indexOf(songs);
      if (musicIndex >= 0) {
        $scope.songs.splice(musicIndex, 1);
      }
    };

  }
]);
 

//     function getMusicList() {
//         return $q(function(resolve, reject) {

//           $.ajax({
//             url: "./../data/songs.json"
//           })
//           .done(function(response) {
//             resolve(response.songs);
//           })
//           .fail(function(xhr,status, error) {
//             reject(error);
//           });
//         });
//       }
    
//     getMusicList()

//     //getSongList()

//     .then(
//       function(promiseResolutionData) {
//         for (var i=0; i<promiseResolutionData.length; i++){
//           $scope.songs.push(promiseResolutionData[i]);
//         }
//     },
//       function(error) {
//       console.log("error", error);
//     });

//     function getMoreMusic() {
//         return $q(function(resolve, reject) {
//           $.ajax({
//             url: "./../data/songs2.json"
//           })
//           .done(function(response) {
//             resolve(response.songs);
//           })
//           .fail(function(xhr,status, error) {
//             reject(error);
//           });
//         });
//       }
//     getMoreMusic()
//   //pushes new songs into the object
//     .then(
//       function(promiseResolutionData) {
//         for (var i=0; i<promiseResolutionData.length; i++){
//           $scope.songs.push(promiseResolutionData[i]);
//         }
//     },
//       function(error) {
//       console.log("error", error);
//     });
//   }
// ]); 