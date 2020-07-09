export class ControlHandler {

    constructor(block) {
        this.block = block;
        this.arrows = {
            37: () => {this.block.moveLeft()},
            40: () => {this.block.moveDown()},
            38: () => {this.block.rotate()},
            39: () => {this.block.moveRight()}
        };
    }

    addControlsListener() {
        try {
            document.addEventListener('keydown', (e) => {
                this.arrows[e.keyCode]();
            })
        } catch (e) {
            console.log("Invalid key pressed. Please use arrows to move");
        }
    }
}