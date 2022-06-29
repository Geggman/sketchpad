// Consts
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

// Check mouse events
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
    clearGrid();
}

function drawGrid(size){
    // Render the grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // Create the cells
    for(let i=0; i < size*size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.userSelect = 'none'; // remove selection 
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
    drawGrid(currentSize);
}


// Start the program
window.onload = () => {
    drawGrid(DEFAULT_SIZE);
}

