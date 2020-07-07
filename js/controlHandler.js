export class ControlHandler {

    constructor(block) {
        this.block = block;
        this.arrows = {
            '37': this.block.moveLeft,
            '40': this.block.moveDown,
            '38': this.block.rotate,
            '39': this.block.moveRight
        };
    }

    addControlsListener() {
        document.addEventListener('keypress', this.makeAction);
    }

    makeAction(e) {
        console.log(e.keyCode);
        this.arrows[e.keyCode]();
    }

}