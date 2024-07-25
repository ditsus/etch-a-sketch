function generateGrid(gridSide) {
    for (let i = 0; i < gridSide; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        container.appendChild(row);
    
        for (let j = 0; j < gridSide; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${gridSize/gridSide}px`; 
            box.style.height = `${gridSize/gridSide}px`;
            box.addEventListener("mouseover", (event) => {
                box.style.backgroundColor = "black";
            });
            row.appendChild(box);
        }
    }
}

let gridSide = 16;
let container = document.querySelector(".container");
gridSize = 750;
container.style.width = `${gridSize}px`;

generateGrid(gridSide);

let button = document.querySelector("button");
let body = document.querySelector("body");
button.addEventListener("click", (event) => {
    gridSide = prompt("Enter a number of squares per side", 4);
    if (gridSide >= 100 || gridSide <= 0) {
        alert("Please enter a value between 0 and 100");
        return; 
    }
    body.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    container.style.width = `${gridSize}px`;
    body.appendChild(container);
    generateGrid(gridSide);
});
