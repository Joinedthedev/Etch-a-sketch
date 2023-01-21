const container = document.querySelector("#container");// reference for container
let square = document.querySelector('#square'); //creating sqaure to be cloned
square.setAttribute('style', 'width: 16px; height: 16px; border-style: solid; border-color: black; padding: 0px; box-sizing: border-box; border-width: 0.2px');
container.appendChild(square);

const clearButton = document.querySelector("#clear");
let chooseSquareSize = document.querySelector('#size');

const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;

let squareArray = [];
squareArray.push(square);

/*This is what creates a grid of squares by cloning 1 square a set number of times based on the noOfSquares function.
By pushing each sqaure into an array, we get a reference to it via its index allowing it to be interacted with using
events. Hence, the use of the foreach.  ETC*/

//for 16 by 16 grid
for (i = 0; i < 1797; i++) {
    let squareClone = square.cloneNode();
    container.appendChild(squareClone);
    squareArray.push(squareClone);
}


let noOfSquares = (size) => {
    square.style.width = size + "px";
    square.style.height = size + "px";

    let height = containerHeight / size;
    let width = containerWidth / size;

    let numberOfsquares = Math.floor(width) * Math.floor(height);



    return numberOfsquares;

}







chooseSquareSize.addEventListener('click', () => {
    let sqaureSize = prompt("Enter your square Size")
    if (sqaureSize < 9) {
        alert("Square size too small! please try again!")
    }
    else {
        squareArray.forEach((square) => container.removeChild(square))
        squareArray = []
        for (j = 0; j < noOfSquares(sqaureSize); j++) {
            let squareClone = square.cloneNode();
            container.appendChild(squareClone);
            squareArray.push(squareClone);
        }
    }
    squareArray.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = 'black'))

});






//function that changes each square back to white, instanciating a clear board
const clearBoard = () => {
    squareArray.forEach((square) => square.style.backgroundColor = "white");
}

//Event Listeners
squareArray.forEach((square) => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = "black")
});

//button to clear board
clearButton.addEventListener('click', () => clearBoard());