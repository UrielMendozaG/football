const bola = document.querySelector(".ball-run");

function esperarTiempo() {
  setTimeout(function() {
    bola.classList.remove("ball-run");

    bola.addEventListener("click", function() {
      bola.classList.toggle("animation");
      
    });
  }, 1000);
}

esperarTiempo();
