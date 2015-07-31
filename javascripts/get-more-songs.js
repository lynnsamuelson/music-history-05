
define(function() {
  var populateSongs = [];
  $.ajax({
      url: "songs2.json",
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