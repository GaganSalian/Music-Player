console.log("wlcome to spotify");

//Intalizeing thw vatriable
let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');

let songs=[
    {songName:"salem-e-Ishak",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Why this Kolaveri de ",filePath:"song/2.mp3",coverPath:"covers/2.jpeg"},
    {songName:"salem-e-Ishak",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"salem-e-Ishak",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"salem-e-Ishak",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},

]
//audioElement.play();


//Handle pllay pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{

//updatr progress bar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
MyProgressBar.value=progress;
})
MyProgressBar,addEventListener('change',()=>{
    audioElement.currentTime=MyProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0

    }
    else{
    songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})