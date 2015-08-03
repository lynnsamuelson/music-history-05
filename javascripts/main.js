requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, populate, getMore) {

    function pageDsp(songs) {
      var currentSong;    

      for (var i = 0; i < songs.length; i++) {
        currentSong = songs[i];
        console.log(currentSong);
        songOutput += "<div id='song'>";
        songOutput += "<div id='del'>" + currentSong.song + "</div>";
        songOutput += "<div id='del'>" + currentSong.artist + "</div>";
        songOutput += "<div id='del'>" + currentSong.album + "</div>";
        songOutput += "<button id=\"delbtn\">Delete</button>";
        songOutput += "<br>";
        songOutput += "</div>";
        //console.log(songOutput);
        
        
      }

          console.log(dom);
          var x = dom.getOutputElement();
          x.html(songOutput);
      
      

      //console.log($('#del'));
      //console.log($('#delbtn'));
      //console.log($('#song' + i))
      $(document).on("click", "#delbtn", function() {
          
          //console.log("delete clicked");
          $(this).parent("div").remove();
        });

    }

    //console.log("dom", dom.getOutputElement());
    //console.log("populate", populate.getSongsOutput);
    //console.log(pageDsp);

    populate.getSongsOutput(pageDsp);


    $("#morebtn").click(function() {
      console.log("click", morebtn);
      console.log("getMore", getMore.getSongsOutput); 
      getMore.getSongsOutput(pageDsp);
    })
  })

  
  var songOutput = "";
  
  

  

  
