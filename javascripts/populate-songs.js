
//this file retrieves the data from the json file "songs" and 
//returns it as an object (assuming the json file is formated
//properly)

define(["jquery","q"], function($, Q) {
  
  return function() { 
    var deferred = Q.defer();

    $.ajax({
       url: "./javascripts/songs.json",
    })
    .done(function(data) { //done means promise was successful 
      deferred.resolve(data); //sends to main js call

    })
    .fail(function(xhr, status, error) {
      deferred.reject(error); //sends error to main js

    });

    return deferred.promise;
  }
});

  //var populateSongs = [];
  //console.log(populateSongs);
  // return {
  //   getNewMovie: function(callback) {
  //     //console.log(callback);
  //     $.ajax({
  //         url: "http://www.omdbapi.com/?",
  //       }).done(function(data) {
  //         //console.log(callback);
  //         callback.call(this, data);
  //         //console.log(populateSongs);
  //     });
  //   }
  // };

