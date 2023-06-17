window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
    audioPlayer.pause(); 
    audioPlayer.currentTime = 0; 
    audioPlayer.volume = 0.5; 
});