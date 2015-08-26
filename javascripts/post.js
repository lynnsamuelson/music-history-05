define(["jquery","q"], function($, Q) {

  return function(newSong) {
    console.log("from post", JSON.stringify(newSong));
    var deferred = Q.defer();
    console.log("return running", deferred);

    $.ajax ({
      url: "https://luminous-fire-170.firebaseio.com/songs.json",
      method: "POST", 
      data: JSON.stringify(newSong)
    })
    .done(function(data) {
      //console.log("newSong", newSong);
      deferred.resolve(data);
      //console.log("data", data);
    })
    
    .fail(function(xhr, status, error) {
      deferred.reject(error);
      console.log("The error is ", error);
    });
    return deferred.promise;
  };
});