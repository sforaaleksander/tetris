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
        console.log('rotate')
    };

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

    unDraw(){
        for (let i = 0; i < this.activeState.length; i++) {
            for (let j = 0; j < this.activeState.length; j++) {
                if (this.activeState[i][j]) {
                    let square = document.querySelector(`[x="${i}"][y="${j}"]`);
                    square.classList.remove(this.color);
                }
            }
        }
    };
    detectCollision(){};
    lock(){};
}