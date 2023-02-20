import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);



const onPlay = function(data) {
    localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds))
};

player.on('timeupdate', throttle(onPlay, 1000));

let currentTime = Number(localStorage.getItem(TIME_KEY));

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
