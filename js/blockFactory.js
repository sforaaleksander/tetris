import {Block} from "./block.js";
import {BLOCK_COLORS} from "./constants";

class BlockFactory {
    getRandomBlock(){
        let randomBlockNo = Math.floor(Math.random() * Object.keys(BLOCK_COLORS).length);
        return new Block(BLOCK_COLORS[randomBlockNo][1], BLOCK_COLORS[randomBlockNo][0]);
    }
}