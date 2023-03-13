import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';

function getPlayerCurrentTime (data) {
  localStorage.setItem(currentTime, data.seconds);
};

player.on('timeupdate', throttle(getPlayerCurrentTime, 1000));

if (localStorage.getItem(currentTime)) {
  player.setCurrentTime(localStorage.getItem(currentTime));
};



