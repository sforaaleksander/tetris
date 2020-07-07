import * as square from "./square.js";
import * as coords from "./coords.js";
import * as game from "./game.js";
import * as constants from "./constants.js";
import * as block from "./block.js";
import * as boardHandler from "./boardHandler.js";
import * as musicHandler from '../js/musicHandler.js';

function main() {
    const boardHandler = new boardHandler.BoardHandler();
    boardHandler.createGrid();
    // alert("Start game!");
    const game = new game.Game();
    musicHandler.MusicHandler.prototype.musicEventListener()
    game.startGame();
}

main()
