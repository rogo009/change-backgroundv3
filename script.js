//variables

const boxOne = document.getElementById('boxOne'); // target box1 #rgb
const buttonOne = document.getElementById('buttonOne').addEventListener('click', rgb);

let r, g, b;

// handler - see above


// function

function rgb() {
    r = Math.floor(Math.random() * 16).toString(16);
    g = Math.floor(Math.random() * 16).toString(16);
    b = Math.floor(Math.random() * 16).toString(16);
    color = `#${r}${g}${b}`;
    boxOne.textContent = color;
    boxOne.style.backgroundColor = color;
}

function hsl() {
    h = Math.floor(Math.random() * 16).toString(16);
    s = Math.floor(Math.random() * 16).toString(16);
    l = Math.floor(Math.random() * 16).toString(16);
    color = `#${h}${s}${l}`;
    boxTwo.textContent = color;
    boxTwo.style.backgroundColor = color;
}