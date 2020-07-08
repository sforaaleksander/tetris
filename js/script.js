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
    nextBlock = BlockFactory.prototype.getRandomBlock2();
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
        nextBlock = BlockFactory.prototype.getRandomBlock2();
        // controlHandler.removeControlsListener();
        block.setState(nextBlock[1]);
        block.setColor(nextBlock[0]);
        // controlHandler = new handlers.ControlHandler(block);
        block.resetX();
        block.resetY();
        block.setIsLockedToFalse();
        block.setStatesNoTo0();
        block.setActiveState();
        block.draw();
        // controlHandler.addControlsListener();
    }
}


