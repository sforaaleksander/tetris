import {ROWS, COLS} from "../models/constants.js";

const gameBox = document.getElementById("game-box");

export class BoardHandler {
    createGrid() {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const squareDiv = this.createSquareDiv(j, i);
                gameBox.appendChild(squareDiv);
            }
        }
    };

    createSquareDiv(j, i){
        const squareDiv = document.createElement("div");
        squareDiv.className = "square";
        squareDiv.setAttribute("x", j.toString());
        squareDiv.setAttribute("y", i.toString());
        return squareDiv;
    };

    insertBlankRow(){
        for (let i=0; i<COLS;i++){
            const j = 0;
            const squareDiv = this.createSquareDiv(i, j);
            gameBox.insertBefore(squareDiv, gameBox.firstChild);
        }
    };

    recalculateCoords(){
        const squares = gameBox.querySelectorAll('.square');
        let i = 0;
        let j = 0;
        for (let x=0; x < squares.length; x++){
            squares[x].setAttribute("x", i.toString());
            squares[x].setAttribute("y", j.toString());
            i++
            if (i === COLS) {
                i=0;
                j++;
            }
        }
    };

    removeFullRow(rowNo){
        let rowOfSquares = gameBox.querySelectorAll(`[y="${rowNo}"]`);
        for (let square of rowOfSquares){
            square.remove();
        }
        console.log("FOUND A FULL ROW NUMBER: " + rowNo);
    };

    checkFullRow() {
        let clearedRows = 0;
        for (let i = ROWS-1; i >= 0; i--) {
            let fullRow = true;
            for (let j = COLS-1; j >= 0; j--) {
                let square = gameBox.querySelector(`[x="${j}"][y="${i}"]`);
                let squareLocked = square.classList.contains("locked");
                if (!squareLocked) {
                    fullRow = false;
                    break;
                }
            }
            if (fullRow){
                this.removeFullRow(i);
                this.insertBlankRow();
                this.recalculateCoords();
                i++;
                clearedRows++;
            }
        }
        return clearedRows;
    };

    setNextBlock(state,color){
        let nextBlockDiv = document.getElementById('next-block');
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const squareDiv = this.createSquareDiv(i, j);
                nextBlockDiv.appendChild(squareDiv);
            }
        }
        this.refreshNextBlock(state,color);
    };

    refreshNextBlock(state,color){
        let nextBlockDiv = document.getElementById('next-block');
        let squares = nextBlockDiv.querySelectorAll('.square');
        squares.forEach( (e) => e.className = 'square');
        let blockSize = state[0].length;
        for (let i = 0; i < blockSize; i++) {
            for (let j = 0; j < blockSize; j++) {
                if (state[i][j]) {
                    let square = nextBlockDiv.querySelector(`[x="${j}"][y="${i}"]`);
                    square.classList.add(color);
                }
            }
        }
    };
}
