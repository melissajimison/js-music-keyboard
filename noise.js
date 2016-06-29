$(document).ready( function() {
  var cAudio = $('#cAudio')
  var dAudio = $('#dAudio')
  var eAudio = $('#eAudio')
  var fAudio = $('#fAudio')
  var gAudio = $('#gAudio')
  var aAudio = $('#aAudio')
  var bAudio = $('#bAudio')

  $('body').keypress(function(e){
    if(e.key == 'c'){
      cAudio[0].play();
    } else if (e.key == 'd') {
      dAudio[0].play();
    } else if (e.key == 'e') {
      eAudio[0].play();
    } else if (e.key == 'f') {
      fAudio[0].play();
    } else if (e.key == 'g') {
      gAudio[0].play();
    } else if (e.key == 'a') {
      aAudio[0].play();
    } else if (e.key == 'b') {
      bAudio[0].play();
    }
  });

  var instrument = $('.instrument')
  var buttons = instrument.children('button')

  buttons.on('click', function(event) {
    event.preventDefault()
    var button = $(this)
    if (button.hasClass("c")) {
      cAudio[0].play();
    } else if (button.hasClass("d")) {
      dAudio[0].play();
    } else if (button.hasClass("e")) {
      eAudio[0].play();
    } else if (button.hasClass("f")) {
      fAudio[0].play();
    } else if (button.hasClass("g")) {
      gAudio[0].play();
    } else if (button.hasClass("a")) {
      aAudio[0].play();
    } else if (button.hasClass("b")) {
      bAudio[0].play();
    }
    // console.log(this); //the object you are interating with, in thiscase the button
    // console.log(event); //Event Object
  })
});
