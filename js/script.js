import {Game} from "./models/game.js";

let game;

const run = ()=> {
    console.log(run);
    game = new Game(run);
    game.initialize();
    game.startGame();
}

(() => {
    run();

})();

// function play(){
//     runGame();
//     if (!game.playAgain){
//         clearInterval(loop)
//     }


