$(document).ready( function() {
  // your code here
  // step 2: get the dom elements
  // step 2: listen for events on those elements
  // step 3: play() function
  //no play two keys at the same time

  $('body').keypress(function(e){
    if(e.key == 'c'){
      var cAudio = $('#cAudio')
      cAudio[0].play();
    } else if (e.key == 'd') {
      var dAudio = $('#dAudio')
      dAudio[0].play();
    } else if (e.key == 'e') {
      var eAudio = $('#eAudio')
      eAudio[0].play();
    } else if (e.key == 'f') {
      var fAudio = $('#fAudio')
      fAudio[0].play();
    } else if (e.key == 'g') {
      var gAudio = $('#gAudio')
      gAudio[0].play();
    } else if (e.key == 'a') {
      var aAudio = $('#aAudio')
      aAudio[0].play();
    } else if (e.key == 'b') {
      var bAudio = $('#bAudio')
      bAudio[0].play();
    }
   });
});
