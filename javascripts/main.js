requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});


requirejs(
  ["jquery", "hbs", "bootstrap", "dom-access", "populate-songs", "get-more-songs"], 
  function($, Handlebars, bootstrap, dom, populate, getMore) {

    var counter = 0;
    function pageDsp(songs) {
      var currentSong;
      if (counter > 1) {
        //console.log("HERE'S THE IF")
        return;
      } else {
        //console.log("HERE'S THE ELSE!")
      
        require(['hbs!../templates/songs'], function(songTemplate) {
        $("#songList").append(songTemplate(songs));
          //var el = $("#songList");
        });
        
        require(['hbs!../templates/artist'], function(artistTemplate) {
            $("#artistdrpdwn").append(artistTemplate(songs));

        });
        require(['hbs!../templates/album'], function(albumTemplate) {
            $("#albumdrpdwn").append(albumTemplate(songs));
       
        });
      }


      $(document).on("click", "#delbtn", function() {
          
          //console.log("delete clicked");
          $(this).parent("div").remove();
        });

    }

    populate.getSongsOutput(pageDsp);


    $("#morebtn").click(function() {
      counter ++;
      //console.log(counter);
  
      getMore.getSongsOutput(pageDsp);

    });       

});

  

  
  
  

  

  
