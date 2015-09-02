import * as $ from "jquery";

export default function ($) {
  let outputEl = $('#songList');
  return {outputEl};
}





//this js file connects the var outputEl to the div with the id
//of songList and then returns that variable.  This is linking 
//the js to a specific place in the html

// define(["jquery"], function($) {
//   var $outputEl = $("#songList");
//   //console.log("songList" + $outputEl);

//   return {
//     getOutputElement: function() {
//       return $outputEl;
//     }
//   };
// });