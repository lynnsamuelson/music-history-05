
define(function() {
  var populateSongs = [];
  return {
    getSongsOutput: function(callback) {
      $.ajax({
          url: "songs.json",
        }).done(function(data) {
          //console.log(callback);
          callback.call(this, data.songs);
      });
    }
  }
});

