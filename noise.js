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
      var sound = cAudio[0].play();
    } else if (e.key == 'd') {
      var sound = dAudio[0].play();
    } else if (e.key == 'e') {
      var sound = eAudio[0].play();
    } else if (e.key == 'f') {
      var sound = fAudio[0].play();
    } else if (e.key == 'g') {
      var sound = gAudio[0].play();
    } else if (e.key == 'a') {
      var sound = aAudio[0].play();
    } else if (e.key == 'b') {
      var sound = bAudio[0].play();
    }
    sound.currentTime = 0
  });

  var instrument = $('.instrument')
  var buttons = instrument.children('button')

  buttons.on('click', function(event) {
    event.preventDefault()
    var button = $(this)
    if (button.hasClass("c")) {
      var sound = cAudio[0]
    } else if (button.hasClass("d")) {
      var sound = dAudio[0]
    } else if (button.hasClass("e")) {
      var sound = eAudio[0]
    } else if (button.hasClass("f")) {
      var sound = fAudio[0]
    } else if (button.hasClass("g")) {
      var sound = gAudio[0]
    } else if (button.hasClass("a")) {
      var sound = aAudio[0]
    } else if (button.hasClass("b")) {
      var sound = bAudio[0]
    }
    sound.play()
    sound.currentTime = 0

    // console.log(this); //the object you are interating with, in thiscase the button
    // console.log(event); //Event Object
  })
});
