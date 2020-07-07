import * as squareJS from "./square.js";
import * as coordsJS from "./coords.js";
import * as gameJS from "./game.js";
import * as constantsJS from "./constants.js";
import * as blockJS from "./block.js";
import * as boardHandlerJS from "./boardHandler.js";
import * as musicHandlerJS from '../js/musicHandler.js';
import {BlockFactory} from "./blockFactory.js";

function main() {
    const boardHandler = new boardHandlerJS.BoardHandler();
    boardHandler.createGrid();
    // alert("Start game!");
    const game = new gameJS.Game();
    musicHandlerJS.MusicHandler.prototype.musicEventListener()
    game.startGame();
    let block = BlockFactory.prototype.getRandomBlock();
    block.draw();
    // block.moveDown();
    // block.draw();
    // block.moveDown();
    // block.draw();
    // block.moveDown();
    // block.draw();
    // block.moveDown();
    // block.draw();
    // block.moveDown();
}

main()
