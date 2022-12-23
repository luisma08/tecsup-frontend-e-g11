'use strict';

import characters from "./modules/characters.js";

const documetReady = () => {
    //Obtener dato de forma asincrona
    const previousCharacters = document.getElementById('previousCharacters');
    const nextCharacters = document.getElementById('nextCharacters');
    let page = 1;
    
    const fetchApi = async (page) => {
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
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            characters(data);
            console.log(data);
       } catch (error) {
            console.log(error);
       } finally {
            window.scrollTo(0, 0);
       }
    };

    previousCharacters.addEventListener('click', () => {
        fetchApi(--page);
    });

    nextCharacters.addEventListener('click', () => {
        fetchApi(++page);
    });
    
    fetchApi(page);
};
document.addEventListener('DOMContentLoaded', documetReady);