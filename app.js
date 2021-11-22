var numberOfDrumButtons = document.querySelectorAll(".aud").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".aud")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "one":
      var tom1 = new Audio("sounds/sounds_crash.mp3");
      tom1.play();
      break;

    case "two":
      var tom2 = new Audio('sounds/Ensoniq-ZR-76-FretNois-GM-C3.wav');
      tom2.play();
      break;

    case "three":
      var tom3 = new Audio('sounds/sounds_crash.mp3');
      tom3.play();
      break;

    case "four":
      var tom4 = new Audio('sounds/sounds_crash.mp3');
      tom4.play();
      break;

    case "five":
      var snare = new Audio('sounds/sounds_crash.mp3');
      snare.play();
      break;

    case "six":
      var crash = new Audio('sounds/sounds_crash.mp3');
      crash.play();
      break;

    case "seven":
      var kick = new Audio('sounds/sounds_crash.mp3');
      kick.play();
      break;
     case "eight":
      var ki = new Audio('sounds/sounds_crash.mp3');
      ki.play();
      break;
     case "nine":
      var k = new Audio('sounds/sounds_crash.mp3');
      k.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("animation");

  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);

}