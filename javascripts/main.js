requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash',    
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'material': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["jquery",
   "q",
   "lodash",
   "firebase",
   "hbs", 
   "bootstrap",
   "dom-access",
   "populate-songs",
   "get-more-songs",
   "post", 
   "authentication",
   "add-song",
   "filter-buttons"], 

function($, Q, _, _firebase, Handlebars, bootstrap, dom,
   populate, getMore, post, auth, add, filterButtons) {

//setting up users authentification
  var ref = new Firebase("https://luminous-fire-170.firebaseio.com");
  var authData = ref.getAuth(); //check to see if current user has authentication data
  var allSongsArray = [];


  console.log("authData", authData);
  //If there is no token key on the authData object, authenticate with 
  //Github OAuth
  if (authData === null) {
    ref.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      auth.setUid(authData.uid);
    }
    });
  } else {
      auth.setUid(authData.uid);
  }
  
    

  var myFirebaseRef = new Firebase("https://luminous-fire-170.firebaseio.com/");
  myFirebaseRef.child("songs").orderByChild("uid").equalTo(auth.getUid()).on("value", function(snapshot) {
  //myFirebaseRef.child("songs").on("value", function(snapshot) {
    var songs = snapshot.val();
    //console.log("all songs", songs);

    require(['hbs!../templates/songs'], function(songTemplate) {
    $("#songList").append(songTemplate({songs:songs}));
      //var el = $("#songList");
    });
    
    require(['hbs!../templates/artist'], function(artistTemplate) {
        $("#artistdrpdwn").append(artistTemplate({songs:songs}));

    });
    require(['hbs!../templates/album'], function(albumTemplate) {
        $("#albumdrpdwn").append(albumTemplate({songs:songs}));
   
    });

    // Convert Firebase's object of objects into an array of objects
    // for (var key in songs) {
    //   allSongsArray[allSongsArray.length] = songs[key];
    // }
      //console.log("all songs array", allSongsArray);

    $(document).on("click", "#delbtn", function() {
        
      //console.log("delete clicked");
      $(this).parent("div").remove();
    });
    

    filterButtons(songs);
    


    // $('#filterbtn').click(function() {
    //     console.log("filter clicked");

    //     var currentArtist = $('#artistdrpdwn').val(); 
    //     //console.log(currentArtist);
    //     var currentAlbum = $('#albumdrpdwn').val(); 
    //     //console.log(currentAlbum);
    //     var checkedboxes = $( "input:checked" );
    //     for (var i = 0; i < checkedboxes.length; i++) {
    //       // if (checkedboxes(i) === song.genre) {

    //       // }
    //     }
         
    //     console.log(allSongsArray); 
    //     console.log(checkedboxes);
    //     var filteredSongs = _.filter(allSongsArray, function(song) {
    //       if (song.artist === currentArtist || song.album === currentAlbum) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     });
    //     //console.log(filteredSongs);
    //     require(['hbs!../templates/songs'], function(songTemplate) {
    //       $("#songList").html(songTemplate({songs:filteredSongs}));
      
    //     });
     
    // }); 

    $('#filterGenrebtn').click(function() {
      console.log("Filter Genre button clicked");
      var filteredGenre = _.filter(allSongsArray, function(song) {
       console.log(filteredGenre);
        });
      
      });

    $('#clearfilterbtn').click(function() {
      console.log("clear filter clicked");
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#songList").html(songTemplate({songs:songs}));
      //var el = $("#songList");
      });

    });


  });

});

      // $.ajax ({
      //   url: "https://luminous-fire-170.firebaseio.com/songs.json",
      //   method: "POST", 
      //   data: JSON.stringify(newSong)
      // }).done(function(NewType) {
      //   console.log("New Song");
      // });
  
// return function() { 
//     var deferred = Q.defer();

//     $.ajax({
//        url: "./javascripts/songs.json",
//     })
//     .done(function(data) { //done means promise was successful 
//       deferred.resolve(data); //sends to main js call

//     })
//     .fail(function(xhr, status, error) {
//       deferred.reject(error); //sends error to main js

//     });

//     return deferred.promise;
//   }


  // var first_list_of_songs = populate();

  // first_list_of_songs
  //   .then(function(first_songs) {
  //   console.log(first_songs); //first songs = data in populate_songs.js
  //     for (var i = 0; i < first_songs.songs.length; i++) {
  //       allSongsArray.push(first_songs.songs[i]);
  //     }
  //   console.log("allSongsArray", allSongsArray); 

  //   return getMore();

  //   })  
  //   .then(function(second_songs) { 
  //     second_songs.songs.forEach(function(song) {
  //       allSongsArray.push(song); 
  //     })
  //   })
  //   .fail()
  //   .done(function() {
  //     console.log("all_songs", allSongsArray);
  //   })
  
  //.then what to do if resolved and .fail is what to do if fails


    // $("#addSong").click(function() {
    //   //console.log("add songclicked");
    //   var artist = $("#newArtist").val();
    //     //console.log("artist", artist);

    //   var song = $("#newSong").val();
    //     //console.log("song", song);

    //   var album = $("#newAlbum", album).val();
    //     //console.log("album", album);
    //   var genre = $("#newGenre", genre).val();
    //     //console.log("Genre", genre);

    //   var uid = auth.getUid();
    //   console.log("uid", uid);
        
    //   var newSong = {};
    //   newSong.song = song;
    //   newSong.artist = artist;
    //   newSong.album = album;
    //   newSong.genre = genre;
    //   newSong.uid = uid
    //   console.log(newSong);

    //   post(newSong);
      
    // });
  

  
       //var rock = $('[name=rock]:checked').val();
       //console.log("rock");
       // if (song.genre === rock) {
       //      return true;
       //    } else {
       //      return false;
       //    }
       //  //console.log(filteredSongs);
       //  require(['hbs!../templates/songs'], function(songTemplate) {
       //    $("#songList").html(songTemplate({songs:filteredGenre}));
      
       //  });
  
  

  

  
