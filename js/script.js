const COLS = 10;
const ROWS = 20;

function main() {
    createGrid();
}

function createGrid() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.setAttribute("x", j.toString());
            square.setAttribute("y", i.toString());

            const gameBox = document.getElementById("game-box");
            gameBox.appendChild(square);
        }
    }
}

main()
