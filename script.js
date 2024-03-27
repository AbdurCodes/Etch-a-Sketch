let container = document.querySelector('.container');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        const cellWidth = (100 / gridSize) + "%";
        div.style.cssText = `flex: 1 1 ${cellWidth}; border: 1px solid red;`;
        // div.textContent = j + 1;
        container.appendChild(div);
    }
}