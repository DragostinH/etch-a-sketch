const mainContainer = document.getElementById('container');
let test = 0;
test = mainContainer.style.height;
console.log(mainContainer.scrollHeight);


function createGrid(parentElement, numberOfSquares) {
    let n = numberOfSquares*numberOfSquares;
    let containerHeight = parentElement.scrollHeight;
    let containerWidht = parentElement.scrollWidth;
    let squareHeight = containerHeight / numberOfSquares;
    let squareWidth = containerWidht / numberOfSquares;

    for (let i = 0; i < n; i++) {
        let element = document.createElement('div');
        element.style.height = squareHeight + "px";
        element.style.width = squareWidth + "px";
        // border to view squares
        element.style.border = "1px solid black";
        // creating the grid
        parentElement.appendChild(element);
    }

}

createGrid(mainContainer, 16);