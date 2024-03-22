function mostrarEjercicios() {
    var opciones = document.getElementById("opciones").value;
    var ejerciciosOperadores = document.getElementById("ejerciciosOperadores");
    var ejerciciosCondicionales = document.getElementById("ejerciciosCondicionales");
    var ejerciciosCiclos = document.getElementById("ejerciciosCiclos");
  
    if (opciones === "1") {
      ejerciciosOperadores.style.display = "block";
      ejerciciosCondicionales.style.display = "none";
      ejerciciosCiclos.style.display = "none";
    } else if (opciones === "2") {
      ejerciciosOperadores.style.display = "none";
      ejerciciosCondicionales.style.display = "block";
      ejerciciosCiclos.style.display = "none";
    } else if (opciones === "3"){
      ejerciciosOperadores.style.display = "none";
      ejerciciosCondicionales.style.display = "none";
      ejerciciosCiclos.style.display = "block";
    }
  }