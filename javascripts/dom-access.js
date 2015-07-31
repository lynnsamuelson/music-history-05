define(function() {
  var $outputEl = $("#songList");
  //console.log("songList" + $outputEl);

  return {
    getOutputElement: function() {
      return $outputEl;
    }
  };
});