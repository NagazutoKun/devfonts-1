"use strict";

var boton = document.getElementById("boton");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var documento = document.getElementById("documento");
var correo = document.getElementById("correo");
var contenedor = document.getElementById("contenedor");
var contrasena = document.getElementById("password");

function inicio() {
  boton.disabled = true;
}

inicio(); // ///////////////////////// VALIDAR CAMPOS  ////////////////////////////

nombre.addEventListener("blur", validarCampo);
apellido.addEventListener("blur", validarCampo);
documento.addEventListener("blur", validarCampo);
correo.addEventListener("blur", validarCampo);
contrasena.addEventListener("blur", validarCampo);

function validarCampo() {
  if (nombre.value.length > 0 && apellido.value.length > 0 && documento.value.length > 0 && correo.value.length > 0 && correo.value.includes("@") && contrasena.value.length > 0) {
    boton.disabled = false;
    boton.style.backgroundColor = "hsla(120,100%,50%,0.5)"; // ////////////////// CREACION DE ELEMNENTO IMG Y AGREGAR AL HTML ////////////////

    var imagen = document.createElement("img");
    imagen.src = "img/encuesta.png";
    imagen.style.width = "70px";
    contenedor.appendChild(imagen);
  }
}