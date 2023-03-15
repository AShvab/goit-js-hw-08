import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

function getPlayerCurrentTime (data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(getPlayerCurrentTime, 1000));

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
};



