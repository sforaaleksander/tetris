const COLS = 10;
const ROWS = 20;
const OFF_BUTTON = document.getElementById('off-music-btn');
const ON_BUTTON = document.getElementById('on-music-btn');

const DEFAULT_BLOCKS = {
    Z : [[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]],
    S : [[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]],
    J : [[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]]],
    T : [[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]],[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]]],
    L : [[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]]],
    I : [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]],
    O : [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]
}


const NAVY_BLUE = 'navy-blue';
const DEEP_BLUE = 'deep-blue';
const PURPLE = 'purple';
const AQUAMARINE = 'aquamarine';
const YELLOW = 'yellow';
const ORANGE = 'orange';
const RED = 'red';
const LIGHT_BLUE = 'light-blue';
const SCARLET = 'scarlet';

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
    drop();
    draw();
    unDraw();
    detectCollision();
    lock();
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
    musicEventListener();
    const game = new Game();
    game.startGame();
}

function musicEventListener() {
    OFF_BUTTON.addEventListener('click', musicOff);
    ON_BUTTON.addEventListener('click', musicOn);
}

function musicOff(){
    let audioBox = document.getElementById('audio');
    if (ON_BUTTON.contains(audioBox)) {
        audioBox.remove();
    }
}

function musicOn() {
    if (!ON_BUTTON.contains(document.getElementById('audio'))) {
        let audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('id', 'audio');
        audio.setAttribute('loop', 'loop');
        ON_BUTTON.appendChild(audio)

        let source = document.createElement('source');
        let audioBox = document.getElementById('audio');
        source.setAttribute('src', '../sound/music.mp3');
        source.setAttribute('type','audio/mpeg');
        audioBox.appendChild(source);
    }
}

main()
