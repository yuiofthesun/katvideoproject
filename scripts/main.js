let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

let videoID = 'O6ZoHdFg_Bs';

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoID ,
    playerVars: {'autoplay': 0, 'controls': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log("API ready, new player created");
}

function onPlayerReady(event) {
  console.log("Player ready");
  event.target.playVideo();
}

let done = false;

function onPlayerStateChange(event) {
  if(event.data == YT.PlayerState.PLAYING && !done) {
    console.log("Player state changed");
    setTimeout(player.playVideo, 60000);
    done = true;
  }
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener('click', startPlayer);
stop.addEventListener('click', stopPlayer);

function startPlayer() {
  console.log("You clicked start");
  player.playVideo();
}

function stopPlayer() {
  console.log("You clicked stop");
  player.stopVideo();
}
