// Create the initial grid for when the page loads for the first time
const mainContainer = document.getElementById('container');
createGrid(mainContainer);
paintCubes(mainContainer);


let size = "";
const buttons = document.querySelectorAll('#size-buttons');

buttons.forEach(element => {
    element.addEventListener('click', e => {
        size = element.className;
        removeGrid(mainContainer);
        createGrid(mainContainer, size);
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
            ele.style.backgroundColor="black";
        })

    })
}


