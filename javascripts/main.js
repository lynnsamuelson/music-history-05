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

      $(document).on("click", "#delbtn", function() {
          
          console.log("delete clicked");
          $(this).parent("div").remove();
      });


    });
  

    

    //var counter = 0;
    // function pageDsp(songs) {
    //   var currentSong;
    //   if (counter > 1) {
    //     //console.log("HERE'S THE IF")
    //     return;
    //   } else {
    //     //console.log("HERE'S THE ELSE!")
      
    //     // require(['hbs!../templates/songs'], function(songTemplate) {
    //     // $("#songList").append(songTemplate(songs));
    //     //   //var el = $("#songList");
    //     // });
        
    //     // require(['hbs!../templates/artist'], function(artistTemplate) {
    //     //     $("#artistdrpdwn").append(artistTemplate(songs));

    //     // });
    //     // require(['hbs!../templates/album'], function(albumTemplate) {
    //     //     $("#albumdrpdwn").append(albumTemplate(songs));
       
    //     // });

    //   }


    //   // $(document).on("click", "#delbtn", function() {
          
    //   //     //console.log("delete clicked");
    //   //     $(this).parent("div").remove();
    //     //});

    // }

    // populate.getSongsOutput(pageDsp);

    // $("#morebtn").click(function() {
    //   counter ++;
    //   //console.log(counter);
  
    //   getMore.getSongsOutput(pageDsp);

    // });
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

      // $('.filterSong').hide();
      // var scoresRef = new Firebase("https://luminous-fire-170.firebaseio.com/");
      // scoresRef.orderByValue().on("value", function(snapshot) {
      //   snapshot.forEach(function(data) {
      //   console.log("The " + data.key() + " dinosaur's score is " + data.val());
      //   });
      // });

     


      //var newArt = $('.media :contains(' + currentArtist + ')').parent().show();
 
      //$('.media :contains(' + albumFilter + ')').parent().show();


    
      //var ref = new Firebase("https://luminous-fire-170.firebaseio.com/songs.json");
// Attach an asynchronous callback to read the data at our posts reference
        //myFirebaseRef.on("value", function(snapshot) {
        //   console.log(snapshot.val());

        // }, function (errorObject) {
        //   console.log("The read failed: " + errorObject.code);
        // });





      //var newArtist = $.get("https://luminous-fire-170.firebaseio.com/songs.json", function (data) {
        //for(artist in newArtist) {
        // var newA = Object.keys(newArtist).reduce(function(previous, current) {
        //   previous[current] = newArtist[current];
        //   return newA;
        // }, {});

        // console.log(newA);
            
      
          //console.log(newArtist);
          // $newArtist.map(function() {
          //   console.log(this.currentArtist);
          // })



      })                           
    //});

});    



  





  

  
  
  

  

  
