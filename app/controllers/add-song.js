define(function(require) {
  var $ = require("jquery");
  var post = require("post");
  var auth = require("authentication");

  $("#addSong").click(function() {
      //console.log("add songclicked");
      var artist = $("#newArtist").val();
        //console.log("artist", artist);

      var song = $("#newSong").val();
        //console.log("song", song);

      var album = $("#newAlbum", album).val();
        //console.log("album", album);
      var genre = $("#newGenre", genre).val();
        //console.log("Genre", genre);

      var uid = auth.getUid();
      console.log("uid", uid);
        
      var newSong = {};
      newSong.song = song;
      newSong.artist = artist;
      newSong.album = album;
      newSong.genre = genre;
      newSong.uid = uid;
      console.log(newSong);

      post(newSong);
      
  });
});