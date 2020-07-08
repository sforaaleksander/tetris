import {ROWS, COLS} from "./constants.js";

export class Block {
    constructor(states, color) {
        this.color = color;
        this.states = states;
        this.x = 3;
        this.y = -this.states[0][0].length;
        this.stateNo = 0;
        this.activeState = this.states[this.stateNo];
        this.isLocked = false;
    }

    moveDown() {
        console.log('move down');
        if (!this.detectCollision(0, 1, this.activeState)) {
            this.unDraw();
            this.y++;
            this.draw();
            return true;
        } else {
            return this.lock();
        }
    };

    moveRight() {
        console.log('move right');
        if (!this.detectCollision(1, 0, this.activeState)) {
            this.unDraw();
            this.x++;
            this.draw();
        }
    };

    moveLeft() {
        console.log('move left');
        if (!this.detectCollision(-1, 0, this.activeState)) {
            this.unDraw();
            this.x--;
            this.draw();
        }
    };

    rotate() {
        let nextActiveState = this.states[(this.stateNo + 1) % this.states.length];
        let bounceFromWall = 0;
        if (this.detectCollision(0, 0, nextActiveState)) {
            bounceFromWall = this.x > COLS / 2 ? -1 : 1; //todo do not work for long one close to right wall
        }
        if (!this.detectCollision(bounceFromWall, 0, nextActiveState)) {
            this.unDraw();
            this.x += bounceFromWall;
            this.stateNo = (this.stateNo + 1) % this.states.length;
            this.activeState = this.states[this.stateNo];
            this.draw();
        }
    };

    draw() {
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    try {
                        let square = document.querySelector(`[x="${this.x + i}"][y="${this.y + j}"]`);
                        square.classList.add(this.color);
                    } catch (e) {

                    }
                }
            }
        }
    };

    unDraw() {
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    try {
                        let square = document.querySelector(`[x="${this.x + i}"][y="${this.y + j}"]`);
                        square.classList.remove(this.color);
                    } catch (e) {
                    }
                }
            }
        }
    };

    detectCollision(x, y, block) {
        for (let i = 0; i < block.length; i++) {
            for (let j = 0; j < block.length; j++) {
                if (!block[i][j]) {
                    continue;
                }
                let newX = this.x + i + x;
                let newY = this.y + j + y;
                if (newX < 0 || newX >= COLS || newY >= ROWS) {
                    return true;
                }
                if (newY < 0) {
                    continue;
                }
                let square = document.querySelector(`[x="${newX}"][y="${newY}"]`);
                if (square.classList.contains('locked')) {
                    return true;
                }
            }
        }
        return false;
    };

    lock() {
        console.log('locking');
        this.isLocked = true;
        let lockedOutOfBorder = false;
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    let square = document.querySelector(`[x="${this.x + i}"][y="${this.y + j}"]`);
                    square.classList.add("locked");
                    if ((this.y + j) > 0) {
                        lockedOutOfBorder = true;
                    }
                }
            }
        }
        return lockedOutOfBorder;
    };

    resetBlock(states, color) {
        this.setState(states);
        this.setColor(color);
        this.resetX();
        this.resetY();
        this.setIsLockedToFalse();
        this.setStatesNoTo0();
        this.setActiveState();
    }

    resetY() {
        this.y = -this.states[0][0].length;
    }

    resetX() {
        this.x = 3;
    }

    setColor(color) {
        this.color = color;
    }

    setState(states) {
        this.states = states;
    }

    setIsLockedToFalse() {
        this.isLocked = false;
    }

    setStatesNoTo0() {
        this.stateNo = 0;
    }

    setActiveState() {
        this.activeState = this.states[this.stateNo];
    }
}