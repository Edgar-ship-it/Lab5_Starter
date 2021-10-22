// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  var confetti;
  var sound;
  var audiosrc;
  selectElement.addEventListener('change', (event) =>{
    let img = document.querySelector("img");
    let image = "assets/images/"+event.target.value+".svg";
    if(event.target.value == "party-horn"){
      confetti = true;
    }
    else{
      confetti = false;
    }
    img.src = image;
    sound = document.getElementsByClassName("hidden");
    audiosrc = "assets/audio/"+event.target.value+".mp3";
    sound = new Audio(audiosrc);
  });
  const slideElement = document.getElementById('volume-controls');
  slideElement.addEventListener('change', (event) =>{
    let img2 = slideElement.querySelector("img");
    if(event.target.value == 0){
      img2.src = "assets/icons/volume-level-0.svg";
      sound.volume = 0;
    }
    else if(event.target.value > 0 && event.target.value < 33){
      img2.src = "assets/icons/volume-level-1.svg";
      sound.volume = (event.target.value)/100;
    }
    else if(event.target.value >= 33 && event.target.value < 67){
      img2.src = "assets/icons/volume-level-2.svg";
      sound.volume = (event.target.value)/100;
    }
    else if(event.target.value >= 67){
      img2.src = "assets/icons/volume-level-3.svg";
      sound.volume = (event.target.value)/100;
    }
  })
  const buttonElement = document.querySelector("button");
  buttonElement.addEventListener('click', function(){
    sound.play();
    console.log(sound);
    if(confetti){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ]
    });
    }
  })
}