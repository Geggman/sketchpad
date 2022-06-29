// Consts
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'pencil';
const DEFAULT_COLOR = 'black';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

// Check mouse events
var mouseDown = false;
document.body.onmousedown = () => { mouseDown = true };
document.body.onmouseup = () => { mouseDown = false };

var grid = document.getElementById('grid');
var clearButton = document.getElementById('clear-btn');
var sizeButton = document.getElementById('size-btn');
var eraserButton = document.getElementById('eraser-btn');
var pencilButton = document.getElementById('pencil-btn');
var colorButton = document.getElementById('color-btn');

// Setup button events
sizeButton.onclick = resizeGrid;
clearButton.onclick = reloadGrid;
eraserButton.onclick = () => { currentMode = 'eraser' };
pencilButton.onclick = () => { currentMode = 'pencil' };
colorButton.oninput = switchColor;


function switchColor(){
    currentColor = colorButton.value;
}

function resizeGrid(){
    currentSize = prompt("How many squares per side? (Max 100)");
    if(currentSize > 100) alert("You've exceeded the maximum (Max 100)");
    else reloadGrid();
}

function drawGrid(size){
    // Render the grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // Create the cells
    for(let i=0; i < size*size; i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.userSelect = 'none'; // remove selection 
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
    }
}


function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode == 'pencil') e.target.style.backgroundColor = currentColor;
    else e.target.style.backgroundColor = 'white';
}


function reloadGrid(){
    grid.innerHTML = '';
    drawGrid(currentSize);
}


// Start the program
window.onload = () => {
    drawGrid(DEFAULT_SIZE);
}

