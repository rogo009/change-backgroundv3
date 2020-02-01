//variables

const boxOne = document.getElementById('boxOne'); // target boxOne #rgb
const boxTwo = document.getElementById('boxTwo'); // target boxTwo hsl()
const boxThree = document.getElementById('boxThree'); // target boxThree rgb()

const buttonOne = document.getElementById('buttonOne').addEventListener('click', rgb);
const buttonTwo = document.getElementById('buttonTwo').addEventListener('click', hsl);
const buttonThree = document.getElementById('buttonThree').addEventListener('click', rgbTwo);

let r, g, b, h, s, l;

// handler - see above handlers are attached to the button variables


// functions

function rgb() {
    r = Math.floor(Math.random() * 16).toString(16);
    g = Math.floor(Math.random() * 16).toString(16);
    b = Math.floor(Math.random() * 16).toString(16);
    color = `#${r}${g}${b}`;
    boxOne.textContent = color;
    boxOne.style.backgroundColor = color;
}

function hsl() {
    h = Math.floor(Math.random() * 360).toString();
    s = Math.floor(Math.random() * 101).toString();
    l = Math.floor(Math.random() * 101).toString();
    color = `hsl(${h}, ${s}%, ${l}%)`;
    boxTwo.textContent = color;
    boxTwo.style.backgroundColor = color;
}

function rgbTwo() {
    r = Math.floor(Math.random() * 256).toString();
    g = Math.floor(Math.random() * 256).toString();
    b = Math.floor(Math.random() * 256).toString();
    color = `rgb(${r}, ${g}, ${b})`;
    boxThree.textContent = color;
    boxThree.style.backgroundColor = color;
}