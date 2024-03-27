let container = document.querySelector('.container');
// let div;

let gridSize = 23;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        const cellWidth = (100 / gridSize) + "%";
        div.style.cssText = `flex: 1 1 ${cellWidth};  border: 1px solid red;`;
        // div.textContent = j + 1;
        container.appendChild(div);
    }
}

console.log('Abdur');

// let container = document.querySelector('.container');
// let gridSize = 13; // Change this value for different grid sizes

// for (let i = 0; i < gridSize; i++) {
//   for (let j = 0; j < gridSize; j++) {
//     const cell = document.createElement('div');
//     const cellWidth = Math.floor(100 / gridSize) + '%'; // Calculate width with potential rounding
//     cell.style.cssText = `flex: 1 1 ${cellWidth}; border: 1px solid red;`;
//     // cell.textContent = (i * gridSize) + j + 1; // Combine row and column numbers
//     container.appendChild(cell);
//   }
// }
