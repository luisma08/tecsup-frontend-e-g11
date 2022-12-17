'use strict';
//import { fetchReadElliotGaramendi } from './services/fetchApi.js';
import header from './header.js';
import profile from './profile.js';
//import experiences from './experiences.js';
//import projects from './projects.js';
//import skills from './skills.js';
//import footer from './footer.js';
// Funcion asincrona toma tiempo
const documentReady = async () => {
  //const elliotgaramendiData = await fetchReadElliotGaramendi();
  header();
  const fetchApi = async () => {
    console.log('Inicio fetch');
    const response = await fetch('http://127.0.0.1:5501/semana-8/1-api/json/jorgemayta.json');//el metodo fetch es para obtener el recurso
    const data = await response.json();
    console.log(data);
    console.log('Fin fetch');
    profile(data);
  };
  console.log('Fin fetch');
  fetchApi();
  console.log('Fin');
  //profile(elliotgaramendiData);
  //experiences(elliotgaramendiData);
  //projects(elliotgaramendiData);
  //skills(elliotgaramendiData);
  //footer(elliotgaramendiData);
};

document.addEventListener('DOMContentLoaded', documentReady);