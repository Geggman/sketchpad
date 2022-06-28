function drawGrid(size){
    // Ask for size
    var grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let cell = document.createElement("div");
            cell.className = "cell";
            grid.appendChild(cell);
        }
    }
}


document.getElementById("size-btn").onclick = () => {
    var size = prompt("How many pixels do you want?");
    drawGrid(size);
};


drawGrid();
