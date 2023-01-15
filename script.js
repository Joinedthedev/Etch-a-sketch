const container = document.querySelector("#container");
const squares = document.createElement('div');

squares.setAttribute('style', 'width: 16px; height: 16px; border-style: solid; border-color: black; padding: 0px; box-sizing: border-box; border-width: 0.2px');

container.appendChild(squares);

const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;


let noOfSquares = (size) => {
    let height = containerHeight /size;
    let width = containerWidth /size;
 
    let squares = width * height;


   
    return squares;

}

console.log(noOfSquares(16));





for (i =0; i<noOfSquares(16); i++){
    container.appendChild(squares.cloneNode());
}

console.log(containerHeight);
console.log(containerWidth)

