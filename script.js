let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.style.cssText = "flex: 1 0 40px; height: auto; border: 1px solid red;";
        div.textContent = j+1;
        container.appendChild(div);
    }
}