requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, populate, getMore) {
    console.log("dom", dom.getOutputElement());
    console.log("populate", populate.getSongsOutput());
    page(dom.getOutputElement(), populate.getSongsOutput());
    $("#morebtn").click(function() { 
      page(dom.getOutputElement(), getMore.getSongsOutput());
    });
   //click function in here to use more btn.
  }
);
  
  var songOutput = "";
  function page(dom, songs) {
    var currentSong;
    

    for (var i = 0; i < songs.length; i++) {
      currentSong = songs[i];
      //console.log(currentSong);
      songOutput += "<div id='song'>";
      songOutput += "<div id='del'>" + currentSong.song + "</div>";
      songOutput += "<div id='del'>" + currentSong.artist + "</div>";
      songOutput += "<div id='del'>" + currentSong.album + "</div>";
      songOutput += "<button id=\"delbtn\">Delete</button>";
      songOutput += "<br>";
      songOutput += "</div>";
      //console.log(songOutput);
      
      
    }
    dom.html(songOutput);
    
    
  
    //console.log($('#del'));
    //console.log($('#delbtn'));
    //console.log($('#song' + i))
    $(document).on("click", "#delbtn", function() {
        
        //console.log("delete clicked");
        $(this).parent("div").remove();
      });
}

  

  
