import {ROWS, COLS} from "../models/constants.js";

export class BoardHandler {
    createGrid() {
        const gameBox = document.getElementById("game-box");
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
        const gameBox = document.getElementById("game-box");
        for (let i=0; i<COLS;i++){
            const j = 0;
            const squareDiv = this.createSquareDiv(i, j);
            gameBox.insertBefore(squareDiv, gameBox.firstChild);
        }
    }

    recalculateCoords(){
        const squares = document.querySelectorAll('.square');
        console.log("recalculating coords");
        console.log(squares);
        let i = 0;
        let j = 0;
        for (let x=0; x < squares.length; x++){
            squares[x].setAttribute("x", i.toString());
            squares[x].setAttribute("y", j.toString());
            i++
            if (i === 10) {
                i=0;
                j++;
            }
        }

    }

    removeFullRow(rowNo){
        let rowOfSquares = document.querySelectorAll(`[y="${rowNo}"]`);
        for (let square of rowOfSquares){
            square.remove();
        }
        console.log("FOUND A FULL ROW NUMBER: " + rowNo);
    }

    checkFullRow() {
        for (let i = ROWS-1; i >= 0; i--) {
            let fullRow = true;
            for (let j = COLS-1; j >= 0; j--) {
                let square = document.querySelector(`[x="${j}"][y="${i}"]`);
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
            }
        }
    };
}
