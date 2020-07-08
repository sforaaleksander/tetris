import * as gameJS from "./models/game.js";
import {BlockFactory} from "./models/blockFactory.js";
import * as handlers from './handlers/handlersBundle.js';

let block;
let nextStatesAndColor;
let controlHandler;
let game;

(() => {
    initialize();
    setInterval(mainLoop, 1000);
})();

function initialize(){
    const boardHandler = new handlers.BoardHandler();
    boardHandler.createGrid();
    alert("Start game!");
    game = new gameJS.Game();
    handlers.MusicHandler.prototype.musicEventListener()
    game.startGame();

    block = BlockFactory.prototype.getRandomBlock();
    nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
    controlHandler = new handlers.ControlHandler(block);
    controlHandler.addControlsListener();
}


function mainLoop(){
    let canMove = block.moveDown();
    if (block.isLocked) {
        if (!canMove) {
            game.isRunning = false;
            clearInterval(mainLoop);
            alert("GameOverXD");
            return;
        }
        nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
        const color = nextStatesAndColor[0];
        const states = nextStatesAndColor[1];
        block.resetBlock(states, color);
    }
}


