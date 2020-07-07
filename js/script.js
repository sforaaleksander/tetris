import * as square from "./square.js";
import * as coords from "./coords.js";
import * as game from "./game.js";
import * as constants from "./constants.js";
import * as block from "./block.js";
import * as boardHandler from "./boardHandler.js";


function main() {
    const boardHandler = new boardHandler.BoardHandler();
    boardHandler.createGrid();
    // alert("Start game!");
    musicEventListener();
    const game = new game.Game();
    game.startGame();
}

function musicEventListener() {
    constants.OFF_BUTTON.addEventListener('click', musicOff);
    constants.ON_BUTTON.addEventListener('click', musicOn);
}

function musicOff(){
    let audioBox = document.getElementById('audio');
    if (constants.ON_BUTTON.contains(audioBox)) {
        audioBox.remove();
    }
}

function musicOn() {
    if (!constants.ON_BUTTON.contains(document.getElementById('audio'))) {
        let audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('id', 'audio');
        audio.setAttribute('loop', 'loop');
        constants.ON_BUTTON.appendChild(audio)

        let source = document.createElement('source');
        let audioBox = document.getElementById('audio');
        source.setAttribute('src', '../sound/music.mp3');
        source.setAttribute('type','audio/mpeg');
        audioBox.appendChild(source);
    }
}

main()
