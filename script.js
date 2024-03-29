function gridGenerator(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'gridItem');
            let cellWidth = (100 / gridSize) + "%";
            div.style.cssText = `flex: 1 1 ${cellWidth}; border: 1px solid red;`;
            // div.textContent = j + 1;
            container.appendChild(div);
        }
    }
}

function gridRemover() {
    let gridItems = document.querySelectorAll('.gridItem');
    for (let gridItem of gridItems) {
        gridItem.style.display = 'none';
    }
}

let container = document.querySelector('.container');
let girdSizeBtn = document.getElementById('girdSizeBtn');

function chooseGridSize() {
    // container.style = "border: 11px solid blue;";
    let gridSize = parseInt(prompt("Plz enter the grid size (e.g 8 for 8x8 grid): ", 10));
    if (gridSize > 30) {
        alert('WARNING! Plz enter grid size not greater than 30')
    }
    else {
        gridRemover();
        gridGenerator(gridSize);
    }
}

girdSizeBtn.addEventListener('click', chooseGridSize);

gridGenerator(16);
// gridGenerator(1); // creates grid of 1x1
// gridGenerator(0); // will create a grid of 0x0; won't clear the previous grid