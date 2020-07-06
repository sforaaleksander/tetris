const COLS = 10;
const ROWS = 20;
const OFF_BUTTON = document.getElementById('off-music-btn');
const ON_BUTTON = document.getElementById('on-music-btn');

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
        source.setAttribute('src', 'http://95.216.116.119/sg/c6/tZ446Zt_7PLXV5-f52fzlA,1594063141/yt:MyNzcqOGUmA-1/%5B1HOUR%5D%20TETRHI%20HI%20HI%20HI%20HI%20HIIIIS.mp3');
        source.setAttribute('type','audio/mpeg');
        audioBox.appendChild(source);
    }
}

main()
