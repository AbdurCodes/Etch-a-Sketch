function gridGenerator(gridSize=16) {
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


function chooseGridSize() {
    let gridSize = parseInt(prompt("Plz enter the grid size (e.g 8 for 8x8 grid): ", 10));
    if (gridSize) {
        if (gridSize > 30) {
            alert('WARNING! Plz enter grid size not greater than 30')
        }
        else {
            gridRemover();
            gridGenerator(gridSize);
            changeColorEvent();
        }
    }
}


function changeColorEvent(){
    let gridItems = document.querySelectorAll('.gridItem');
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', changeColor);
    }
}

let opacity = 0.1;
function changeColor(e){
    let target = e.target;
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    target.style.backgroundColor = `rgba(${redValue},${greenValue},${blueValue},${opacity})`;
    if (opacity <= 1.0) {
        opacity += 0.1;
    }
    else {
        opacity = 0.1;
    }
    // console.log(opacity);
}


let container = document.querySelector('.container');
let girdSizeBtn = document.getElementById('girdSizeBtn');

girdSizeBtn.addEventListener('click', chooseGridSize);

gridGenerator();
// gridGenerator(1); // creates grid of 1x1
// gridGenerator(0); // will create a grid of 0x0; won't clear the previous grid
changeColorEvent();