const MUSIC_SOURCES = ["./music/my_piano1.mp3","./music/my_piano2.mp3","./music/my_piano3.mp3"];
const MUSIC_NAMES = ["MUSIC1","MUSIC2","MUSIC3"];

let audioObject = new Audio();

let index = 0;
let currentAudioSource = MUSIC_SOURCES[0];
audioObject.src = currentAudioSource;

function handleMusicStart() { 
  audioObject.play();
  $("#audio-name").text(MUSIC_NAMES[index]);
}

function handleMusicPause() { 
  audioObject.pause();
}

function handleMusicNext() { 
  index = (index + 1) % MUSIC_SOURCES.length;
  currentAudioSource = MUSIC_SOURCES[index];
  audioObject.src = currentAudioSource;

  audioObject.play();
  $("#audio-name").text(MUSIC_NAMES[index]);
}