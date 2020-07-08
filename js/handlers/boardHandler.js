import {ROWS, COLS} from "../constants.js";

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
    removeFullRow(){}
}
