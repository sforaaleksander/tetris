const COLS = 10;
const ROWS = 20;
const OFF_BUTTON = document.getElementById('off-music-btn');
const ON_BUTTON = document.getElementById('on-music-btn');
const Z = [[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]];
const S = [[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]];
const J = [[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]]];
const T = [[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]],[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]]];
const L = [[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]]];
const I = [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]];
const O = [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]];

function main() {
    createGrid();
    musicEventListener();
}

function createGrid() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.setAttribute("x", j.toString());
            square.setAttribute("y", i.toString());

            const gameBox = document.getElementById("game-box");
            gameBox.appendChild(square);
        }
    }
}

function musicEventListener() {
    OFF_BUTTON.addEventListener('click', musicOff);
    ON_BUTTON.addEventListener('click', musicOn);
}

function musicOff(){
    let audioBox = document.getElementById('audio');
    if (ON_BUTTON.contains(audioBox)) {
        audioBox.remove();
    }
}

function musicOn() {
    if (!ON_BUTTON.contains(document.getElementById('audio'))) {
        let audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('id', 'audio');
        audio.setAttribute('loop', 'loop');
        ON_BUTTON.appendChild(audio)

        let source = document.createElement('source');
        let audioBox = document.getElementById('audio');
        source.setAttribute('src', '../sound/music.mp3');
        source.setAttribute('type','audio/mpeg');
        audioBox.appendChild(source);
    }
}

main()
