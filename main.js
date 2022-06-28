// Consts
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;


var mouseDown = false;
document.body.onmousedown = () => { mouseDown = true };
document.body.onmouseup = () => { mouseDown = false };

var grid = document.getElementById('grid');
var clearButton = document.getElementById("clear-btn");
var sizeButton = document.getElementById("size-btn");

// Setup button events
sizeButton.onclick = resizeGrid;
clearButton.onclick = clearGrid;

function resizeGrid(){
    currentSize = prompt("Enter new size");
    drawGrid(currentSize);
}

function drawGrid(size){
    // Ask for size
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i < size*size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
    }
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

function clearGrid(){
    grid.innerHTML = '';
}

// Start the program
window.onload = () => {
    drawGrid(DEFAULT_SIZE);
    console.log(document.getElementById('grid').classList);
}

