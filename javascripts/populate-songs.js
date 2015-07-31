
define(function() {
  var populateSongs = [];
  $.ajax({
      url: "songs.json",
      async: false
    }).done(function(data) {
      populateSongs = data.songs;
    });
  return {
        getSongsOutput: function() {
          return populateSongs;
        }
      }
});