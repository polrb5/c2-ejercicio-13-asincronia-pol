/* eslint-disable import/extensions */
import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elementos DOM
const personajesElementos = document.querySelector(".personajes");
const botonCargarPersonajes = document.querySelector(".cargar-personajes");
const botonMatarFamilia = document.querySelector(".matar-familia");
const familia = document.querySelector(".familia");
const mensajeError = document.querySelector(".mensaje");

const vaciarPersonajes = () => {
  for (const personaje of personajesElementos.querySelectorAll(".personajes")) {
    personaje.remove();
  }
};

const pintarPersonajes = (personajes) => {
  vaciarPersonajes();
  for (const personaje of personajes) {
    const { nombre, familia, estado } = personaje;
    const personajeMolde = document
      .querySelector(".personaje-dummy")
      .cloneNode(true);
    personajeMolde.classList.remove("personaje-dummy");
    personajeMolde.querySelector(".nombre").textContent = nombre;
    personajeMolde.querySelector(".familia").textContent = familia;
    personajeMolde.querySelector(".estado").textContent = estado
      ? "vivo"
      : "muerto";
    console.log(personajes);
    personajesElementos.append(personajeMolde);
  }
};

const cargarPersonajes = async () => {
  const personajes = await getPersonajes();
  pintarPersonajes(personajes);
};

const matarPersonajes = async () => {
  try {
    const personajesMuertos = await mataPersonajes(familia.value);
    pintarPersonajes(personajesMuertos);
  } catch (error) {
    mensajeError.textContent = error.message;
  }
};

botonCargarPersonajes.addEventListener("click", cargarPersonajes);
botonMatarFamilia.addEventListener("click", matarPersonajes);
