'use strict';

import characters from "./modules/characters.js";
import header from "./modules/header.js";

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
       if(page == 1){
            previousCharacters.setAttribute('disabled', true);
            previousCharacters.classList.add('bg-dark', 'text-light');
       } else if(page == 5){
            nextCharacters.setAttribute('disabled', true);
            nextCharacters.classList.add('bg-dark', 'text-light');
       } else {
            previousCharacters.classList.remove('bg-dark', 'text-light');
            nextCharacters.classList.remove('bg-dark', 'text-light');
            previousCharacters.removeAttribute('disabled');
            nextCharacters.removeAttribute('disabled');
       }

       try {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            characters(data);
            console.log(data);
            console.log(page);
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
    header();
};
document.addEventListener('DOMContentLoaded', documetReady);