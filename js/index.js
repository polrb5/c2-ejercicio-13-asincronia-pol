/* eslint-disable import/extensions */
import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elementos DOM
const personajesElementos = document.querySelector(".personajes");
const botonCargarPersonajes = document.querySelector(".cargar-personajes");
const botonMatarFamilia = document.querySelector(".matar-familia");

const vaciarPersonajes = () => {
  for (const personaje of personajesElementos.querySelectorAll(".personaje")) {
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
    personajesElementos.append(personajeMolde);
  }
};

const cargarPersonajes = async () => {
  const personajes = await getPersonajes();
  pintarPersonajes(personajes);
};

botonCargarPersonajes.addEventListener("click", cargarPersonajes);
