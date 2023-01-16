const container = document.querySelector("#container");// reference for container
let square = document.createElement('div'); //creating sqaure to be cloned

const clearButton= document.querySelector("#clear");

square.setAttribute('style', 'width: 16px; height: 16px; border-style: solid; border-color: black; padding: 0px; box-sizing: border-box; border-width: 0.2px');

container.appendChild(square);

const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;


let noOfSquares = (size) => {
    let height = containerHeight /size;
    let width = containerWidth /size;
 
    let square = width * height;


   
    return square;

}




/*This is what creates a grid of squares by cloning 1 square a set number of times based on the noOfSquares function.
By pushing each sqaure into an array, we get a reference to it via its index allowing it to be interacted with using
events. Hence, the use of the foreach.  ETC*/
let squareArray = [];
squareArray.push(square);
for (i =0; i<noOfSquares(16); i++){
    let squareClone = square.cloneNode();
    container.appendChild(squareClone);
    squareArray.push(squareClone);
}

const clearBoard = ()=>{
  squareArray.forEach((square)=> square.style.backgroundColor = "white");
}

//Event Listeners
squareArray.forEach( (square)=>{
    square.addEventListener('mouseover', ()=> square.style.backgroundColor = "black")}) ;

clearButton.addEventListener('click', ()=>clearBoard());