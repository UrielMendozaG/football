const bola = document.querySelector(".ball-run");
const score = document.getElementById("score");
var points = 0;

 function esperarTiempo() {
   setTimeout(function() {
     bola.classList.remove("ball-run");

     bola.addEventListener("click", function() {
       bola.classList.toggle("animation");
     });

     bola.addEventListener("dblclick", function() {
       points++;
       score.innerHTML = "<h2>"+points+"</h2>";
     });

     bola.addEventListener("mouseover", function() {
      bola.style.cursor = "pointer";
    });

    
   }, 1000);
 }

document.getElementById("double-tap").addEventListener("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault();
    //action on double tap goes below
    points++;
    score.innerHTML = "<h2>"+points+"</h2>";
    bola.classList.toggle("animation");
 }
   

 esperarTiempo();
