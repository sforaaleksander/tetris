import * as handlers from "../handlers/handlersBundle.js";
import {BlockFactory} from "./blockFactory.js";


let block = BlockFactory.prototype.getRandomBlock();
let nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
let controlHandler = new handlers.ControlHandler(block);
let loop = undefined;
let boardHandler;

export class Game {
    constructor() {
        this.isRunning = true
        this.level = 1;
        this.points = 0;
        this.initialize();
        this.startGame();
    }

    initialize(){
        boardHandler = new handlers.BoardHandler();
        boardHandler.createGrid();
        alert("Start game!");
        handlers.MusicHandler.prototype.musicEventListener()
        controlHandler.addControlsListener();
        boardHandler.setNextBlock(nextStatesAndColor[0][0],nextStatesAndColor[1]);
    }

    mainLoop(){
        let canMove = block.drop();
        if (block.isLocked) {
            if (!canMove) {
                clearInterval(loop);
                alert("GameOverXD");
                this.isRunning = false;
                return;
            }
            let states = nextStatesAndColor[0];
            let color = nextStatesAndColor[1];
            block.resetBlock(states, color);

            nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
            let state = nextStatesAndColor[0][0];
            let newColor = nextStatesAndColor[1];
            boardHandler.refreshNextBlock(state, newColor);
        }
    }

    startGame(){
        loop = setInterval(this.mainLoop,500);
    };
}