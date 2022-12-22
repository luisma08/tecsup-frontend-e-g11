'use strict';

import foods from "./modules/foods.js";

const documetReady = () => {
    const fetchApi = async () => {
        const response = await fetch('http://127.0.0.1:5501/semana-8/3-chanchirata/json/foods.json');
        const data = await response.json();
        foods(data);
    };
    fetchApi();
};
document.addEventListener('DOMContentLoaded', documetReady);