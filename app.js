// Create the initial grid for when the page loads for the first time
const mainContainer = document.getElementById('container');
createGrid(mainContainer);
paintCubes(mainContainer);


let sizeOfArea = "";
let chosenColor = "";
// Buttons for setting the size of the draw area
const sizeButtons = document.querySelectorAll('#size-buttons');

// Clear button. Both for when there has been a size set or not
const clearButton = document.getElementById('clear-button');


const colorPicker = document.getElementById('color-picker');
console.log(colorPicker.value);


// Adding event listener for when you click it to clear the grid
clearButton.addEventListener('click', e=>{
    if(sizeOfArea.length===0){
        removeGrid(mainContainer);
        createGrid(mainContainer);
        paintCubes(mainContainer);

    }else{
        removeGrid(mainContainer);
        createGrid(mainContainer,sizeOfArea);
        paintCubes(mainContainer);

    }
})
// adding event listener for when you click a button to change the size of the grid
sizeButtons.forEach(element => {
    element.addEventListener('click', e => {
        sizeOfArea = element.className;
        removeGrid(mainContainer);
        createGrid(mainContainer, sizeOfArea);
        paintCubes(mainContainer);
    })
})



function createGrid(parentElement, numberOfSquares = 4) {
    let n = numberOfSquares * numberOfSquares; //number for loops
    let element;
    let containerHeight = parentElement.scrollHeight; // height of the draw area
    let containerWidht = parentElement.scrollWidth; // width of the draw area
    let squareHeight = containerHeight / numberOfSquares; //height of the square based on the container
    let squareWidth = containerWidht / numberOfSquares; // width of the square based on the container

    // if (element.classList === 'cube-element') {
    //     parentElement.removeChild('cube-element');

    // }

    for (let i = 0; i < n; i++) {
        element = document.createElement('div');
        element.style.height = squareHeight + "px";
        element.style.width = squareWidth + "px";
        element.classList.add('cube-element');
        // border to view squares
        element.style.border = "1px solid black";
        parentElement.appendChild(element);
    }
}

function removeGrid(parentElement){
    while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    }
}

function paintCubes(parentElement){
    let listOfCubes = parentElement.querySelectorAll('.cube-element');
    console.log(listOfCubes);
    listOfCubes.forEach(ele =>{
        ele.addEventListener("mouseenter", e=>{
            ele.style.backgroundColor=colorPicker.value;
        })

    })
}


