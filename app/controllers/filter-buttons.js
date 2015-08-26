define(function(require) {
  var $ = require("jquery");
  var auth = require("authentication");
  var allSongsArray = [];
  var templates = require("get-templates");

  return function(songs) { 
    $('#filterbtn').click(function(allSongsArray) {
      //console.log("filter clicked");

      var currentArtist = $('#artistdrpdwn').val(); 
      //console.log("current Artist", currentArtist);
      var currentAlbum = $('#albumdrpdwn').val(); 
      //console.log(currentAlbum);
      var checkedboxes = $( "input:checked" );
      for (var i = 0; i < checkedboxes.length; i++) {
        // if (checkedboxes(i) === song.genre) {

      }

      for (var key in songs) {
        allSongsArray[allSongsArray.length] = songs[key];
      }

      console.log("songs", songs);
      var songKey = [];
      for (var j = 0; j < songs.length; j++) {
        
      }

      console.log("songKey", songKey);
      console.log("current Artist2", currentArtist);
      //console.log("allSongsArray", allSongsArray);
      // var filteredSongs = _.filter(allSongsArray, function(song) {
      //   if (song.artist === currentArtist || song.album === currentAlbum) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });
      // var songTmpl = templates.songsTpl({songs: filteredSongs});
      // $("#sonsList").html(songTmpl);
    });

       
      //console.log(allSongsArray); 
      //console.log(checkedboxes);
      //console.log(filteredSongs);


  };



      // require(['hbs!../templates/songs'], function(songTemplate) {
      //   $("#songList").html(songTemplate({songs:filteredSongs}));

      // });
  
}); 