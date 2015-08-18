define(["jquery","q"], function($, Q) {
  
  return function() { 
    var deferred = Q.defer();

    $.ajax({
       url: "./javascripts/songs2.json",
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



// define(["jquery"], function($) {
//   var populateSongs = [];
//   return {
//     getSongsOutput: function(callback) {
//       $.ajax({
//           url: "songs2.json",
//         }).done(function(data) {
//           //console.log("click callback", callback);
//           callback.call(this, data);
//         });
//     }
//   };
// });

