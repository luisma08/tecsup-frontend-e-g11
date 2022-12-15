'use strict';

const documentReady = () => {
    const heroTitle = document.getElementById('heroTitle')
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const brokenHeart = ()=>{
        noButton.style.top = Math.random() * innerHeight + 'px';
        noButton.style.left = Math.random() * innerWidth + 'px';
        yesButton.classList.remove('emoji');
    }

    const loved = ()=>{
        yesButton.classList.add('emoji');
    }

    const partner = prompt('😍 Dime tu nombre 😍');
    heroTitle.innerHTML += ` ${partner || 'Anonimo'} ? ❤ `;

    noButton.addEventListener('mouseover', brokenHeart);
    yesButton.addEventListener('mouseover', loved)
};

document.addEventListener('DOMContentLoaded', documentReady);