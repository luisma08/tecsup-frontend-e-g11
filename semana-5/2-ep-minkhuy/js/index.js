'use strict';

const navMenuIcon=document.getElementById('nav-menu-icon');
const listHeader=document.getElementById('list-header');
navMenuIcon.addEventListener('click', () => {
    listHeader.style.opacity = '1';
});