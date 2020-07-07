export class Block {
    constructor(color, states){
        // this.y = 0;
        this.color = color;
        this.states = states;
        this.x = 3;
        this.y = -this.states[0][0].length;
        this.stateNo = 0;
        this.activeState = this.states[this.stateNo];
    }

    moveDown(){
        console.log('move down');
        console.log(this);
        this.unDraw();
        this.y++;
        this.draw();
    };

    moveRight(){
        console.log('move right');
        this.unDraw();
        this.x++;
        this.draw();
    };

    moveLeft(){
        console.log('move left');

        this.unDraw();
        this.x--;
        this.draw();
    };

    rotate(){
        this.unDraw();
        this.stateNo = (this.stateNo + 1)%this.states.length;
        this.activeState = this.states[this.stateNo];
        this.draw();
    };

    drop(){
        this.y++;
    };

    draw() {
        console.log(this)
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    try {
                        let square = document.querySelector(`[x="${this.x+i}"][y="${this.y+j}"]`);
                        square.classList.add(this.color);
                    } catch (e) {

                    }
                }
            }
        }
    };

    unDraw(){
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    try {
                        let square = document.querySelector(`[x="${this.x+i}"][y="${this.y+j}"]`);
                        square.classList.remove(this.color);
                    }catch (e) {

                    }
                }
            }
        }
    };
    detectCollision(){};
    lock(){};
}