// Funcion tabs
const tabLinks = document.querySelectorAll(".tab-link");
const tabPane = document.querySelectorAll(".tab-pane");

tabLinks.forEach(function (link, index) {
  link.addEventListener("click", function () {
    tabPane.forEach(function (panel, indice) {
      panel.style.display = "none";
    });
    tabPane[index].style.display = "block";
  });
});

// Desplegable del Qr
const acordeon = document.getElementsByClassName("contenedor");

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}
