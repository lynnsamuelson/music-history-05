//requirejs gets the other js files and populates a function to 
//the code in those files accessible.  Order is important (i.e. 
// dom-access relates to the "dom" argument in the function)

requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, populate, getMore) {

//The function pageDsp takes the data that is passed into it and
//loops through the data to make each key in the object into an 
//html element

    var songOutput = "";
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

// set var x to the argument dom in the require js function which 
//links the data to #songList in the html

          //console.log(dom);
          var x = dom.getOutputElement();
          x.html(songOutput);
      
      

      //console.log($('#del'));
      //console.log($('#delbtn'));
      //console.log($('#song' + i))


//this is jquery to say that when the delete button is clicked,
//a function to remove the the div from the page runs.  This 
//code was used because the html was inserted into the dom and 
//therefore needed to be bonded? Not sure about this completely.

//the (this) referes to the div associated with that button 
//(inserted with the for loop).  Used parent because all the 
//desired data (song name, artist, etc) was wrapped in a div
//delete btn coded dynamically. This is waiting for the delete
//btn to populate (timing thing)

      $(document).on("click", "#delbtn", function() {
          
          //console.log("delete clicked");
          $(this).parent("div").remove();
        });

    }

    //console.log("dom", dom.getOutputElement());
    //console.log("populate", populate.getSongsOutput);
    //console.log(pageDsp);

//populate.getSongsOutput goes to populate-songs.js and returns the
// getSongsOutput function using the function pageDsp as the 
//arguement.  

    populate.getSongsOutput(pageDsp);

//when the more button (id=morebtn) is clicked the getMore.
//getSongsOutput is returned with the pageDsp function.  This
//is the same as above except, the get-more-songs.js file is
//referenced.

    $("#morebtn").click(function() {
      console.log("click", morebtn);
      console.log("getMore", getMore.getSongsOutput); 
      getMore.getSongsOutput(pageDsp);
    });
  });

  
//var songOutput defines songOutput as a string for use in the
//pageDsp function.  If this variable is just defined (i.e. var
//songOutput) "undefined" is inserted into the DOM.

  
  
  

  

  
