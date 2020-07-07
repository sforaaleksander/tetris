import {ROWS, COLS} from "./constants";

export class BoardHandler {
    createGrid() {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const square = this.createSquare(j, i);
                const gameBox = document.getElementById("game-box");
                gameBox.appendChild(square);
            }
        }
    };
    createSquare(j, i){
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute("x", j.toString());
        square.setAttribute("y", i.toString());
        return square;
    };
    removeFullRow(){}
}