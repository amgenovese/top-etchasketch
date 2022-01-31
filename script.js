const container = document.querySelector('#container');
let cell;
let target;

function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow); 
    container.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}

function promptGrid() {
   let number = prompt("How big do you want your grid? Pick a number up to 64", 16); 
    if (number >= 5 && number <= 64) {
        makeGrid (number,number);
    }
    else {
        do {
            number = prompt("No! Needs to be between 5 and 64!!!");
        }
        while(number < 5 || number > 64);
        makeGrid (number,number);
    }
}

function onHover (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;
    if (target.matches("div.cell")) {
        onHover(target);
    }
});

const reset = document.querySelector('.resetButton');
reset.addEventListener('click', function(){
     window.location.reload();
});

promptGrid();