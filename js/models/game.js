import * as handlers from "../handlers/handlersBundle.js";
import {BlockFactory} from "./blockFactory.js";


let block = BlockFactory.prototype.getRandomBlock();
let nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
let controlHandler = new handlers.ControlHandler(block);
let loop = undefined;
let boardHandler;


export class Game {
    constructor() {
        this.level = 1;
        this.points = 0;
        this.isRunning = true;
        this.initialize();
        this.startGame();
    }

    initialize() {
        boardHandler = new handlers.BoardHandler();
        boardHandler.createGrid();
        alert("Start game!");
        handlers.MusicHandler.prototype.musicEventListener()
        controlHandler.addControlsListener();
        boardHandler.setNextBlock(nextStatesAndColor[0][0], nextStatesAndColor[1]);
    }

    mainLoop() {
        let canMove = block.drop();
        if (block.isLocked) {
            if (!canMove) {
                clearInterval(loop);
                alert("GameOverXD");
                this.isRunning = false;
                return;
            }
            if (this.isNextLevel()) {
                console.log("NEXT LEVEL");
                this.level++;
                clearInterval(loop);
                loop = setInterval(this.mainLoop.bind(this), 600 - (10 * this.level));
            }
            let clearedRows = handlers.BoardHandler.prototype.checkFullRow();
            this.givePoints(clearedRows);
            console.log(this.points);
            this.updateScore();
            let states = nextStatesAndColor[0];
            let color = nextStatesAndColor[1];
            block.resetBlock(states, color);

            nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
            let state = nextStatesAndColor[0][0];
            let newColor = nextStatesAndColor[1];
            boardHandler.refreshNextBlock(state, newColor);
        }
    }

    startGame() {
        loop = setInterval(this.mainLoop.bind(this), 600);
    }

    givePoints(clearedRows) {
        let pointsAchieved = clearedRows * (this.level + this.level / 4) * 100;
        if (clearedRows >= 4) {
            pointsAchieved += 999;
        }
        console.log("GIVE POINTS")
        this.points += pointsAchieved;
    }

    isNextLevel() {
         return (this.points - this.level * 1000) > 1000;
    }

    updateScore() {
        const score = document.getElementById("game-score");
        const level = document.getElementById("game-level");
        score.innerHTML = this.points;
        level.innerHTML = this.level;
    }
}