import * as handlers from "../handlers/handlersBundle.js";
import {BlockFactory} from "./blockFactory.js";


let block;
let nextStatesAndColor;
let controlHandler;
let loop = undefined;
let boardHandler;


export class Game {
    constructor(restart) {
        this.level = 1;
        this.points = 0;
        this.restart = restart;
    }

    initialize() {
        block = BlockFactory.prototype.getRandomBlock();
        nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
        controlHandler = new handlers.ControlHandler(block);

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
                this.endGame();
                return;
            }
            this.afterLockedTheBlock();
        }
    }

    afterLockedTheBlock() {

        let clearedRows = handlers.BoardHandler.prototype.checkFullRow();
        if (clearedRows) {
            this.updateStats(clearedRows);
        }
        this.updateBlockObject();
        this.refreshNextBlockDisplay();
    }

    startGame() {
        loop = setInterval(this.mainLoop.bind(this), 600);
    }

    givePoints(clearedRows) {
        let pointsAchieved = clearedRows * ((5*this.level/4) * 100);
        if (clearedRows >= 4) {
            pointsAchieved += 999;
        }
        console.log("GIVE POINTS")
        this.points += pointsAchieved;
    }

    isLevelNeedToBeUpdated() {
        return (this.points - this.level * 1000) >= 0;
    }

    updateScoreDisplay() {
        const score = document.getElementById("game-score");
        const level = document.getElementById("game-level");
        score.innerHTML = this.points;
        level.innerHTML = this.level;
    }

    updateLevel(){
        console.log("UPDATE LEVEL");
        let countLvl = Math.ceil((this.points-(this.level * 1000))/1000) +this.level;
        console.log('points '+this.points)
        console.log('lvl '+this.level)
        console.log('counted lvl  '+countLvl)
        console.log(this.points/(this.level * 1000))
        this.level = countLvl;
        clearInterval(loop);
        loop = setInterval(this.mainLoop.bind(this), 600 - (25 * this.level));
    }

    endGame() {
        console.log("CANT MOVE");
        clearInterval(loop);
        alert("GameOverXD");
        this.askToPlayAgain();
    }

    updateStats(clearedRows) {
        this.givePoints(clearedRows);
        console.log(this.points);
        if (this.isLevelNeedToBeUpdated()) {
            this.updateLevel();
        }
        this.updateScoreDisplay();
    }

    updateBlockObject() {
        let states = nextStatesAndColor[0];
        let color = nextStatesAndColor[1];
        block.resetBlock(states, color);
    }

    refreshNextBlockDisplay() {
        nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
        let state = nextStatesAndColor[0][0];
        let newColor = nextStatesAndColor[1];
        boardHandler.refreshNextBlock(state, newColor);
    }

    askToPlayAgain() {
        if(confirm("Play again?")){
            this.resetGame();
            this.restart();
        }
    }

    resetGame(){
        block = undefined;
        let squares = document.querySelectorAll('.square');
        squares.forEach((e)=>e.remove());
    }
}