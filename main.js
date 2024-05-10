// Consts
const DEFAULT_SIZE = 8;
const DEFAULT_MODE = "pencil";
const DEFAULT_COLOR = "black";

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

// Check mouse events
var mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

var grid = document.getElementById("grid"); // Grid div
var clearButton = document.getElementById("clear-btn"); // Clear button
var sizeButton = document.getElementById("size-btn"); // Resize button
var eraserButton = document.getElementById("eraser-btn"); // Eraser button
var pencilButton = document.getElementById("pencil-btn"); // Pencil button
var colorButton = document.getElementById("color-btn"); // Color wheel button

// Setup button events
sizeButton.onclick = resizeGrid;
clearButton.onclick = reloadGrid;
// Glow effect for the selected button (Pencil / Eraser)
eraserButton.onclick = () => {
  (currentMode = "eraser"), glowCurrentButtonMode();
};
pencilButton.onclick = () => {
  (currentMode = "pencil"), glowCurrentButtonMode();
};
colorButton.oninput = switchColor;

function glowCurrentButtonMode() {
  // Add the glow effect to the selected button
  if (currentMode == "pencil") {
    pencilButton.style.filter = "drop-shadow(0px 1px 7px white)";
    eraserButton.style.filter = "none";
  } else if (currentMode == "eraser") {
    eraserButton.style.filter = "drop-shadow(0px 1px 7px white)";
    pencilButton.style.filter = "none";
  }
}

function switchColor() {
  currentColor = colorButton.value;
}

function resizeGrid() {
  // Get size from the user and resize the grid, the minimum size is 8x8 and the maximum is 100x100
  var newSize = prompt("Canvas size? (Min 8, Max 100)");
  if (newSize == "") newSize = DEFAULT_SIZE;
  else if (newSize == null) return; // If the user cancels break out of the function and abort the resize operation
  if (newSize > 100) alert("Invalid size (100 MAX)");
  else if (newSize < 8) alert("Invalid size (8 MIN)");
  else {
    currentSize = newSize;
    reloadGrid();
  }
}

function drawGrid(size) {
  // Render the grid
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the cells
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.userSelect = "none"; // remove selection
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    grid.appendChild(cell);
  }
}

function reloadGrid() {
  grid.innerHTML = "";
  drawGrid(currentSize);
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode == "pencil") e.target.style.backgroundColor = currentColor;
  else e.target.style.backgroundColor = "white";
}

// Start the program
window.onload = () => {
  drawGrid(DEFAULT_SIZE);
  glowCurrentButtonMode();
};
