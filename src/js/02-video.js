
import Player from '@vimeo/player';


const iframe = document.querySelector('#vimeo-player');

const options = {
    width: 640,
    muted: true,
}
const player = new Player(iframe, options);

    player.on('play', function() {
        console.log('played the video!');
    });

    // const onPlay = function(data) {
    // // data is an object containing properties specific to that event
    // };

    // player.on('play', onPlay);

    // // If later on you decide that you don’t need to listen for play anymore.
    player.pause('play', function() {
        console.log('stop the video!');
    });
    

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

console.log(iframe);
console.log(player);