"use strict";

var boton = document.getElementById("boton");
var documento = document.getElementById("documento");
var contenedor = document.getElementById("contenedor");
var contrasena = document.getElementById("password");

function inicio() {
  boton.disabled = true;
}

inicio(); // ///////////////////////// VALIDAR CAMPOS  ////////////////////////////

documento.addEventListener("blur", validarCampo);
contrasena.addEventListener("blur", validarCampo);

function validarCampo() {
  if (documento.value.length > 0 && contrasena.value.length > 0) {
    boton.disabled = false;
    boton.style.backgroundColor = "hsla(120,100%,50%,0.5)"; // ////////////////// CREACION DE ELEMNENTO IMG Y AGREGAR AL HTML ////////////////

    var imagen = document.createElement("img");
    imagen.src = "img/encuesta.png";
    imagen.style.width = "70px";
    contenedor.appendChild(imagen);
  }
}