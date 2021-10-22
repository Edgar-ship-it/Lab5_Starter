// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) =>{
    var confetti;
    let img = document.querySelector("img");
    let image = "assets/images/"+event.target.value+".svg";
    if(event.target.value == "party-horn"){
      confetti = true;
    }
    else{
      confetti = false;
    }
    img.src = image;
    var sound = document.getElementsByClassName("hidden");
    var audiosrc = "assets/audio/"+event.target.value+".mp3";
    sound.src = audiosrc;
  });
  const buttonElement = document.querySelector("button");
  buttonElement.addEventListener('click', () =>{
    sound.play();
    if(confetti){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
    }
  })
  const slideElement = document.getElementById('volume-controls');
  slideElement.addEventListener('change',
}