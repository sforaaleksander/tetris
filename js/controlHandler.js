export class ControlHandler {

    constructor(block) {
        this.block = block;
        this.arrows = {
            37: this.block.moveLeft,
            40: this.block.moveDown,
            38: this.block.rotate,
            39: this.block.moveRight
        };
    }

    addControlsListener() {
        document.addEventListener('keydown', (e) => {this.arrows[e.keyCode]();
        });
    }

    // addControlsListener() {
    //     document.addEventListener('keydown', this.makeAction);
    // }
    //
    // makeAction(e) {
    //     console.log(e.keyCode);
    //     console.log(this);
    //
    //     this.arrows[e.keyCode]();
    // }

}