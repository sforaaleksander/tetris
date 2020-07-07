export const OFF_BUTTON = document.getElementById('off-music-btn');
export const ON_BUTTON = document.getElementById('on-music-btn');

export class MusicHandler {

    musicEventListener() {
        OFF_BUTTON.addEventListener('click', MusicHandler.musicOff());
        ON_BUTTON.addEventListener('click', MusicHandler.musicOn());
    }

    musicOff(){
        let audioBox = document.getElementById('audio');
        if (ON_BUTTON.contains(audioBox)) {
            audioBox.remove();
        }
    }

    musicOn() {
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
}
