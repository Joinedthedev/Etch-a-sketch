const container = document.querySelector("#container");
const squares = document.createElement('div');

squares.setAttribute('style', 'width: 16px; height: 16px; border-style: solid; border-color: black;');

container.appendChild(squares);

for (i =0; i<1673; i++){
    container.appendChild(squares.cloneNode());
}

console.log(window.innerHeight);
console.log(window.innerWidth)