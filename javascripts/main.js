requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash',    
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
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
  ["jquery", "lodash", "firebase", "hbs", "bootstrap", "dom-access", "populate-songs", "get-more-songs"], 
  function($, _, _firebase, Handlebars, bootstrap, dom, populate, getMore) {
    
  var allSongsArray = [];


  var myFirebaseRef = new Firebase("https://luminous-fire-170.firebaseio.com/");
  myFirebaseRef.child("songs").on("value", function(snapshot) {
    var songs = snapshot.val();
    console.log(songs);

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
    for (var key in songs) {
      allSongsArray[allSongsArray.length] = songs[key];
    }
      console.log("all songs array", allSongsArray);

    $(document).on("click", "#delbtn", function() {
        
      console.log("delete clicked");
      $(this).parent("div").remove();
    });


    $('#filterbtn').click(function() {
        console.log("filter clicked");

        var currentArtist = $('#artistdrpdwn').val(); 
        console.log(currentArtist);
        var currentAlbum = $('#albumdrpdwn').val(); 
        console.log(currentAlbum);
        var checkedboxes = $( "input:checked" );
        for (var i = 0; i < checkedboxes.length; i++) {
        }  
        console.log(checkedboxes);
        var filteredSongs = _.filter(allSongsArray, function(song) {
          if (song.artist === currentArtist || song.album === currentAlbum) {
            return true;
          } else {
            return false;
          }
        })
        console.log(filteredSongs);
        require(['hbs!../templates/songs'], function(songTemplate) {
          $("#songList").html(songTemplate({songs:filteredSongs}));
      
        });
     
    }); 


  });


    $("#addSong").click(function() {
      console.log("add songclicked");
      var artist = $("#newArtist").val();
        console.log("artist", artist);

      var song = $("#newSong").val();
        console.log("song", song);

      var album = $("#newAlbum", album).val();
        console.log("album", album);
      var genre = $("#newGenre", genre).val();
        console.log("Genre", genre);
        
      var newSong = {};
      newSong['song.song'] = song;
      newSong['song.artist'] = artist;
      newSong['song.album'] = album;
      newSong['song.genre'] = genre;
      console.log(newSong);
     

      $.ajax ({
        url: "https://luminous-fire-170.firebaseio.com/songs.json",
        method: "POST", 
        data: JSON.stringify(newSong)
      }).done(function(NewType) {
        console.log("New Song");
      });
    });


  });


  





  

  
  
  

  

  
