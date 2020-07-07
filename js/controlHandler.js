export class ControlHandler {

    constructor(block) {
        this.block = block;
    }

    arrows = {
        '37': this.block.moveLeft,
        '40': this.block.moveDown,
        '38': this.block.rotate,
        '39': this.block.moveRight
    };

    addControlsListener() {
        document.addEventListener('keypress', this.makeAction);
    }

    makeAction(e) {
        this.arrows[e.keyCode]();
    }

}