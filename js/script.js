import * as musicHandler from '../js/musicHandler.js';

const COLS = 10;
const ROWS = 20;


const DEFAULT_BLOCKS = {
    Z : [[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]],
    S : [[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]],
    J : [[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]]],
    T : [[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]],[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]]],
    L : [[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]]],
    I : [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]],
    O : [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]
}

const COLORS = {
    NAVY_BLUE: 'navy-blue',
    DEEP_BLUE: 'deep-blue',
    PURPLE: 'purple',
    AQUAMARINE: 'aquamarine',
    YELLOW: 'yellow',
    ORANGE: 'orange',
    RED: 'red',
    LIGHT_BLUE: 'light-blue',
    SCARLET: 'scarlet',
}

class Game {
    constructor() {
        this.isRunning = true
    }

    startGame(){};
    userControl(){};
}

class Block {
    constructor(color, states){
        this.color = color;
        this.states = states;
        this.activeState = 0;
        this.stateNo = 0;
    }

    moveDown(){};
    moveRight(){};
    moveLeft(){};
    rotate(){};
    drop(){};
    draw(){};
    unDraw(){};
    detectCollision(){};
    lock(){};
}

class Square {
    constructor(Coords) {
        this.coords = Coords;
        this.isEmpty = true;
    }
}

class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class BoardHandler {
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

function main() {
    const boardHandler = new BoardHandler();
    boardHandler.createGrid();
    // alert("Start game!");
    musicHandler.MusicHandler.prototype.musicEventListener()
    const game = new Game();
    game.startGame();
}

main()
