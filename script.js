const container = document.querySelector('#container');
let cell;
let target; 

// makes cells(divs)

function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}


//cells within each row. Example makeGrid(4,3), loop would run 4 times makeing  3 cells/colums per row each loop

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow); 
    container.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}

function promptGrid() {
   let number = prompt("Choose grid size between 5-64!", 16); 
    if (number >= 5 && number <= 64) {
        makeGrid (number,number);
    }else {
        do {
            number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
        }
        while(number < 5 || number > 64);
        makeGrid (number,number);
    }
}


//change color when mouseover 

function changeColor (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});


//reset button

const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', function(){
     window.location.reload();
});

promptGrid();