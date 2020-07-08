import * as gameJS from "./models/game.js";
import {BlockFactory} from "./models/blockFactory.js";
import * as handlers from './handlers/handlersBundle.js';

let block;
let nextBlock;
let controlHandler;
let game;

(() => {
    const boardHandler = new handlers.BoardHandler();
    boardHandler.createGrid();
    alert("Start game!");
    game = new gameJS.Game();
    handlers.MusicHandler.prototype.musicEventListener()
    game.startGame();

    block = BlockFactory.prototype.getRandomBlock();
    nextBlock = BlockFactory.prototype.getRandomBlock();
    controlHandler = new handlers.ControlHandler(block);
    block.draw();
    controlHandler.addControlsListener();

    setInterval(mainLoop, 1000);
})();


function mainLoop(){
    let canMove = block.moveDown();
    if (block.isLocked) {
        if (!canMove) {
            game.isRunning = false;
            clearInterval(mainLoop);
            alert("GameOverXD");
            return;
        }
        controlHandler.removeControlsListener();
        block = nextBlock;
        nextBlock = BlockFactory.prototype.getRandomBlock();
        controlHandler = new handlers.ControlHandler(block);
        block.draw();
        controlHandler.addControlsListener();
    }
}


