// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) =>{
    const img = document.querySelector("img");
    let image = "assets/images/"+event.target.value+".svg";
    img.src = image;
    const sound = document.getElementsByClassName("hidden");
    let audiosrc = "assets/audio/"+event.target.value+".mp3";
    sound.src = audiosrc;
  });
}