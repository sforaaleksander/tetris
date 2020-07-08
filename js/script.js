import * as squareJS from "./square.js";
import * as coordsJS from "./coords.js";
import * as gameJS from "./game.js";
import * as constantsJS from "./constants.js";
import * as blockJS from "./block.js";
import * as boardHandlerJS from "./boardHandler.js";
import * as musicHandlerJS from './musicHandler.js';
import {BlockFactory} from "./blockFactory.js";
import {ControlHandler} from "./controlHandler.js";

let block;
let nextBlock;
let controlHandler;
let game;

function main() {
    const boardHandler = new boardHandlerJS.BoardHandler();
    boardHandler.createGrid();
    alert("Start game!");
    game = new gameJS.Game();
    musicHandlerJS.MusicHandler.prototype.musicEventListener()
    game.startGame();

    block = BlockFactory.prototype.getRandomBlock();
    nextBlock = BlockFactory.prototype.getRandomBlock();
    controlHandler = new ControlHandler(block);
    block.draw();
    controlHandler.addControlsListener();

    setInterval(mainLoop, 1000);
}


function mainLoop(){
    block.drop();
    if (block.isLocked) {
        if (!block.moveDown()) {
            game.isRunning = false;
            clearInterval(mainLoop);
            alert("GameOverXD");
            return;
        }
        controlHandler.removeControlsListener();
        block = nextBlock;
        nextBlock = BlockFactory.prototype.getRandomBlock();
        controlHandler = new ControlHandler(block);
        block.draw();
        controlHandler.addControlsListener();
    }
}


main()
