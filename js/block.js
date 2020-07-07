export class Block {
    constructor(color, states){
        this.color = color;
        this.states = states;
        this.activeState = 0;
        this.stateNo = 0;
    }

    moveDown(){};
    moveRight(){};
    moveLeft(){};
    rotate(){};
    drop(){};
    draw(){};
    unDraw(){};
    detectCollision(){};
    lock(){};
}