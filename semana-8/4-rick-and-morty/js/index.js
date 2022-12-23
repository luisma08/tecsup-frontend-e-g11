'use strict';

import characters from "./modules/characters.js";

const documetReady = () => {
    //Obtener dato de forma asincrona
    
    const fetchApi = async () => {
        //await esperar para obtener el dato
        /*
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');//End point
        const data = await response.json();// Espera y parsea a json
        characters(data);
        */
       /* Axios
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        */
       try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
            characters(data);
       } catch (error) {
            console.log(error);
       } finally {
        console.log('Se obtuvo el recurso');
       }
    };
    
    fetchApi();
};
document.addEventListener('DOMContentLoaded', documetReady);