const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

let songs = [
{
name:"Song 1",
artist:"Artist 1",
file:"song.mp3",
image:"cover.jpg"
},
{
name:"Song 2",
artist:"Artist 2",
file:"song2.mp3",
image:"cover2.jpg"
}
];

let songIndex = 0;


// Load song
function loadSong(){
let song = songs[songIndex];

title.innerHTML = song.name;
artist.innerHTML = song.artist;
audio.src = song.file;
cover.src = song.image;
}

loadSong();


// Play
playBtn.onclick=function(){

if(audio.paused){

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

audio.pause();

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

};


// Next
document.getElementById("next").onclick=function(){

songIndex++;

if(songIndex >= songs.length){
songIndex=0;
}

loadSong();
audio.play();

};


// Previous
document.getElementById("prev").onclick=function(){

songIndex--;

if(songIndex < 0){
songIndex=songs.length-1;
}

loadSong();
audio.play();

};


// Volume
volume.oninput=function(){

audio.volume=this.value/100;

};


// Progress
audio.ontimeupdate=function(){

progress.value=(audio.currentTime/audio.duration)*100;

};


progress.oninput=function(){

audio.currentTime=(this.value/100)*audio.duration;

};
