import * as handlers from "../handlers/handlersBundle.js";
import {BlockFactory} from "./blockFactory.js";


let block = BlockFactory.prototype.getRandomBlock();
let nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
let controlHandler = new handlers.ControlHandler(block);
let loop = undefined;

export class Game {
    constructor() {
        this.isRunning = true
        this.level = 1;
        this.points = 0;
        this.initialize();
        this.startGame();
    }

    initialize(){
        const boardHandler = new handlers.BoardHandler();
        boardHandler.createGrid();
        alert("Start game!");
        handlers.MusicHandler.prototype.musicEventListener()
        controlHandler.addControlsListener();
    }

    mainLoop(){
        let canMove = block.moveDown();
        if (block.isLocked) {
            if (!canMove) {
                clearInterval(loop);
                alert("GameOverXD");
                this.isRunning = false;
                return;
            }
            nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
            const color = nextStatesAndColor[0];
            const states = nextStatesAndColor[1];
            block.resetBlock(states, color);
        }
    }


    startGame(){
        loop = setInterval(this.mainLoop,500);
    };
}