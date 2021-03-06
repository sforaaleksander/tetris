import {Block} from "./block.js";
import {BLOCK_COLORS} from "./constants.js";

export class BlockFactory {
    getRandomBlock(){
        let randomBlockNo = Math.floor(Math.random() * Object.keys(BLOCK_COLORS).length);
        return new Block(BLOCK_COLORS[randomBlockNo][0], BLOCK_COLORS[randomBlockNo][1]);
    }

    getRandomStateAndColor() {
        let randomBlockNo = Math.floor(Math.random() * Object.keys(BLOCK_COLORS).length);
        return [BLOCK_COLORS[randomBlockNo][0], BLOCK_COLORS[randomBlockNo][1]];
    }
}