const lightBoxEl = document.querySelector('.lightBox');
const greenLightEl = document.querySelector('#greenLight');
const yellowLightEl = document.querySelector('#yellowLight');
const redLightEl= document.querySelector('#redLight');

function makeGreen() {
    greenLightEl.style.background = ('green');
    yellowLightEl.style.background = ('black');
    redLightEl.style.background = ('black');
    lightBoxEl.removeEventListener('click', makeGreen);
    lightBoxEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    yellowLightEl.style.background = ('yellow');
    greenLightEl.style.background = ('black');
    redLightEl.style.background = ('black');
    lightBoxEl.removeEventListener('click', makeYellow);
    lightBoxEl.addEventListener('click', makeRed);
}

function makeRed() {
    redLightEl.style.background = ('red');
    greenLightEl.style.background = ('black');
    yellowLightEl.style.background = ('black');
    lightBoxEl.removeEventListener('click', makeRed);
    lightBoxEl.addEventListener('click', makeGreen);
}

lightBoxEl.addEventListener('click', makeGreen);