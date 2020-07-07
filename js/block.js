export class Block {
    constructor(color, states){
        this.x = 3;
        // this.y = -this.states[0][0].length;
        this.y = 0;
        this.color = color;
        this.states = states;
        this.stateNo = 0;
        this.activeState = this.states[this.stateNo];
    }

    moveDown(){
        this.unDraw();
        this.y++;
        this.draw();
    };
    moveRight(){};
    moveLeft(){};
    rotate(){};
    drop(){
        this.y++;
    };
    draw() {
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    let square = document.querySelector(`[x="${i}"][y="${j}"]`);
                    square.classList.add(this.color);
                }
            }
        }
    };
    unDraw(){};
    detectCollision(){};
    lock(){};
}