function drawGrid(){
    // Create a 16x16 grid with divs
    var grid = document.getElementById('grid');
    console.log(grid);
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            let cell = document.createElement("div");
            cell.innerHTML = i+j;
            cell.className = "cell";
            grid.appendChild(cell);
        }
    }
}

drawGrid();
