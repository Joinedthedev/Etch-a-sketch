const container = document.querySelector("#container");
let square = document.querySelector('#squares');

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

console.log(noOfSquares(16));



let squareArray = [];

for (i =0; i<noOfSquares(16); i++){
    let squareClone = square.cloneNode();
    container.appendChild(squareClone);
    squareArray.push(squareClone);
}

const squares = document.querySelectorAll('#squares');

console.log(containerHeight);
console.log(containerWidth)
console.log(square);
squareArray.forEach( (square)=>{
    square.addEventListener('mouseover', ()=> square.style.backgroundColor = "red")}) ;
