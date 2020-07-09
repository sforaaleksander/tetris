import * as handlers from "../handlers/handlersBundle.js";
import {BlockFactory} from "./blockFactory.js";

export class Game {
    constructor(restart) {
        this.nextStatesAndColor;
        this.loop;
        this.boardHandler;
        this.controlHandler;
        this.block;
        this.level = 1;
        this.points = 0;
        this.restart = restart;
    }

    initialize() {
        this.block = BlockFactory.prototype.getRandomBlock();
        this.nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
        this.controlHandler = new handlers.ControlHandler(this.block);

        this.boardHandler = new handlers.BoardHandler();
        this.boardHandler.createGrid();
        alert("Start game!");
        handlers.MusicHandler.prototype.musicEventListener()
        this.controlHandler.addControlsListener();
        this.boardHandler.setNextBlock(this.nextStatesAndColor[0][0], this.nextStatesAndColor[1]);
    }

    mainLoop() {
        let canMove = this.block.drop();
        if (this.block.isLocked) {
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
        this.loop = setInterval(this.mainLoop.bind(this), 600);
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

    updateScoreDisplay(level, points) {
        const scoreDiv = document.getElementById("game-score");
        const levelDiv = document.getElementById("game-level");
        scoreDiv.innerHTML = points;
        levelDiv.innerHTML = level;
    }

    updateLevel(){
        console.log("UPDATE LEVEL");
        let countLvl = Math.ceil((this.points-(this.level * 1000))/1000) +this.level;
        console.log('points '+this.points)
        console.log('lvl '+this.level)
        console.log('counted lvl  '+countLvl)
        console.log(this.points/(this.level * 1000))
        this.level = countLvl;
        clearInterval(this.loop);
        this.loop = setInterval(this.mainLoop.bind(this), 600 - (25 * this.level));
    }

    endGame() {
        console.log("CANT MOVE");
        clearInterval(this.loop);
        alert("GameOverXD");
        this.askToPlayAgain();
    }

    updateStats(clearedRows) {
        this.givePoints(clearedRows);
        console.log(this.points);
        if (this.isLevelNeedToBeUpdated()) {
            this.updateLevel();
        }
        this.updateScoreDisplay(this.level, this.points);
    }

    updateBlockObject() {
        let states = this.nextStatesAndColor[0];
        let color = this.nextStatesAndColor[1];
        this.block.resetBlock(states, color);
    }

    refreshNextBlockDisplay() {
        this.nextStatesAndColor = BlockFactory.prototype.getRandomStateAndColor();
        let state = this.nextStatesAndColor[0][0];
        let newColor = this.nextStatesAndColor[1];
        this.boardHandler.refreshNextBlock(state, newColor);
    }

    askToPlayAgain() {
        if(confirm("Play again?")){
            this.resetGame();
            this.restart();
        }
    }

    resetGame() {
        this.block.color = 'white';
        this.updateScoreDisplay(1,0)
        let squares = document.querySelectorAll('.square');
        squares.forEach((e)=>e.remove());
    }
}