function drawGrid(){
    // Ask for size
    var cols = prompt("How many columns do you want?");
    var rows = prompt("How many rows do you want?");
    var grid = document.getElementById('grid');

    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            let cell = document.createElement("div");
            cell.className = "cell";
            grid.appendChild(cell);
        }
    }
}



drawGrid();
