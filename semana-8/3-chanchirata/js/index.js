'use strict';

import foods from "./modules/foods.js";

const documetReady = () => {
    foods();
};
document.addEventListener('DOMContentLoaded', documetReady);