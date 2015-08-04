
//this file retrieves the data from the json file "songs" and 
//returns it as an object (assuming the json file is formated
//properly)

define(function() {
  //var populateSongs = [];
  //console.log(populateSongs);
  return {
    getSongsOutput: function(callback) {
      console.log(callback);
      $.ajax({
          url: "songs.json",
        }).done(function(data) {
          //console.log(callback);
          callback.call(this, data.songs);
          //console.log(populateSongs);
      });
    }
  };
});

