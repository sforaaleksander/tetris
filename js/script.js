import * as squareJS from "./square.js";
import * as coordsJS from "./coords.js";
import * as gameJS from "./game.js";
import * as constantsJS from "./constants.js";
import * as blockJS from "./block.js";
import {BlockFactory} from "./blockFactory.js";
import * as handlers from './handlers/handlersBundle.js';

let block;
let nextBlock;
let controlHandler;
let game;

(() => {
    const boardHandler = new handlers.BoardHandler();
    boardHandler.createGrid();
    // alert("Start game!");
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
    block.drop();
    if (block.isLocked) {
        console.log("locked!");
        // delete controlHandler;
        // controlHandler.removeControlsListener();
        block = nextBlock;
        nextBlock = BlockFactory.prototype.getRandomBlock();
        controlHandler = new ControlHandler(block);
        block.draw();
        controlHandler.addControlsListener();
    }
    if (!game.isRunning) {
        alert("GameOverXD");
    }
}


