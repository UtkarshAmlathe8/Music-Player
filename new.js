console.log("welcome")
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');  


let songs = [
    {songName: "Warriyo-NCS",filePath: "1.mp3"}
]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa fa-pause-circle');
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa fa-pause-circle');
        masterPlay.classList.add('fa-solid fa-play');
    }
}) 
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

smallPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa fa-pause-circle');
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa fa-pause-circle');
        masterPlay.classList.add('fa-solid fa-play');
    }
    })

