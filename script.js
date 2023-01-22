const container = document.querySelector("#container");// reference for container
let square = document.querySelector('#square'); //referencing sqaure to be cloned
square.setAttribute('style', 'width: 16px; height: 16px; border-style: solid; border-color: black; padding: 0px; box-sizing: border-box; border-width: 0.2px; margin');
container.appendChild(square);

const clearButton = document.querySelector("#clear");
let chooseSquareSize = document.querySelector('#size');

//Gets the current height and width of Grid container
const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;

let squareArray = [];
squareArray.push(square);

/*This is what creates a grid of squares by cloning 1 square a set number of times based on the fact is takes 1797 squares to fill
a 1000x460 rectangle. By pushing each square into an array, we get a reference to it via its index allowing it to be interacted with using
events. Hence, the use of the foreach.  ETC*/

//for 16 by 16 grid
for (i = 0; i < 1797; i++) {
    let squareClone = square.cloneNode();
    container.appendChild(squareClone);
    squareArray.push(squareClone);
}

/*The function below does two things. 
1. Changes the size of each individual square on the grid.
2. Calculates the number of squares it'll take to fill the container with the new sqaure size.
*/

let noOfSquares = (size) => {
    square.style.width = size + "px";
    square.style.height = size + "px";

    let height = containerHeight / size;
    let width = containerWidth / size;

    let numberOfsquares = Math.floor(width) * Math.ceil(height); 
    /*^^^^the mixed use of floor and ceil somehow makes the number of squares always be a multiple 
    of the width and height of the container. This allows the sqaures to perfectly fill the container
    and gets rid of unwanted gaps between rows.*/ 




    return numberOfsquares;

}


/*when the below button is clicked, it promps the user to input a size of a new grid.
It then checks if the size you entered is too big or small. If the size is okay, itll proceed to 
clear the orginal 16x16 grid by clearing all the squares from the container and removing them from the array
then it'll reappend and repush the squares based on the size you entered, creating a new grid entirely*/


chooseSquareSize.addEventListener('click', () => {
    let sqaureSize = prompt("Enter your grid Size. E.g typing 16 will make a 16x16 grid. ")
    if (sqaureSize < 5) {
        alert("Grid size too small! Grid must be no smaller 5x5. Please try again!")
    }
    else if (sqaureSize > 100) {
        alert("Grid size too big! Grid must be no greater than 100x100. Please try again!")
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
    changeOnHover();
});






//function that changes each square back to white, instanciating a clear board
const clearBoard = () => {
    squareArray.forEach((square) => square.style.backgroundColor = "white");
}

//function that changes the color of the square once you hover over it.
const changeOnHover = () => {
    squareArray.forEach((square) => {
        square.addEventListener('mouseover', () => square.style.backgroundColor = "black")
    });
}

const changeOnhold = () => {
    squareArray.forEach((square) => {
        square.addEventListener('mousedown', () => square.style.backgroundColor = 'white')
    })

}
//button to clear board
clearButton.addEventListener('click', () => clearBoard());
changeOnHover();
//changeOnhold();

console.table(squareArray)