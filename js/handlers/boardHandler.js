import {ROWS, COLS} from "../models/constants.js";

export class BoardHandler {
    createGrid() {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const squareDiv = this.createSquareDiv(j, i);
                const gameBox = document.getElementById("game-box");
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

    removeFullRow(rowNo){
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
            }
        }
    };
}
