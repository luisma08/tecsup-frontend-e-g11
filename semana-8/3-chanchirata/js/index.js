'use strict';

import foods from "./modules/foods.js";

const documetReady = () => {
    //Obtener dato de forma asincrona
    const fetchApi = async () => {
        //await esperar para obtener el dato
        const response = await fetch('http://127.0.0.1:5501/semana-8/3-chanchirata/json/foods.json');//End point
        const data = await response.json();// Espera y parsea a json
        foods(data);
    };
    fetchApi();
};
document.addEventListener('DOMContentLoaded', documetReady);