/* eslint-disable import/extensions */
import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elementos DOM
const personajesElemento = document.querySelector(".personajes");
const personajeDummy = document.querySelector(".personaje.dummy");
const botonCargarPersonajes = document.querySelector(".cargar-personajes");
const botonMatarFamilia = document.querySelector(".matar-familia");

const vaciarPersonajes = () => {
  for (const personjesElemento of personajesElemento.querySelector("personaje"))
    personajesElemento.remove();
};
