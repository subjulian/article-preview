const button= document.querySelector(".card__share button");
const button2= document.querySelector(".card__share2 button");
const social= document.querySelector(".card__social");

button.addEventListener("focus", () => {
    document.getElementById("social").style.display = "inline-flex";
});

button.addEventListener("blur", () => {
    document.getElementById("social").style.display = "none";
});

function esTamañoValido() {
    return window.innerWidth <= 768;
  }
  
  
  button.addEventListener("focus", () => {
    if (esTamañoValido()) {
      document.getElementById("footer").style.display = "none";
      document.getElementById("social2").style.display = "inline-flex";
    }
});

  button2.addEventListener("click", () => {
    if (esTamañoValido()) {
      document.getElementById("social2").style.display = "none";
      document.getElementById("footer").style.display = "flex";
    }
  });



