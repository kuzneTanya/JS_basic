const trafficLightEl = document.querySelectorAll('.trafficLight');
const greenLightEl = document.querySelector('#greenLight');
const yellowLightEl = document.querySelector('#yellowLight');
const redLightEl= document.querySelector('#redLight');

function makeGreen() {
    greenLightEl.style.background = ('green');
    yellowLightEl.style.background = ('black');
    redLightEl.style.background = ('black');
    trafficLightEl.forEach(element => {
        element.removeEventListener('click', makeGreen);
        element.addEventListener('click', makeYellow);
    });
    
}

function makeYellow() {
    yellowLightEl.style.background = ('yellow');
    greenLightEl.style.background = ('black');
    redLightEl.style.background = ('black');
    trafficLightEl.forEach(element => {
        element.removeEventListener('click', makeYellow);
        element.addEventListener('click', makeRed);
    });
}

function makeRed() {
    redLightEl.style.background = ('red');
    greenLightEl.style.background = ('black');
    yellowLightEl.style.background = ('black');
    trafficLightEl.forEach(element => {
        element.removeEventListener('click', makeRed);
        element.addEventListener('click', makeGreen);
    });
}

trafficLightEl.forEach(element => {
    element.addEventListener('click', makeGreen);
});
