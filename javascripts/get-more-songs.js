
define(["jquery"], function($) {
  var populateSongs = [];
  return {
    getSongsOutput: function(callback) {
      $.ajax({
          url: "songs2.json",
        }).done(function(data) {
          //console.log("click callback", callback);
          callback.call(this, data);
        });
    }
  };
});

