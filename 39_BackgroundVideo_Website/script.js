const backVideo = document.getElementById('backVideo');
const btn = document.getElementById('btn');

btn.onclick = function() {
    backVideo.style.display = 'block';

    if(backVideo.paused) {
        backVideo.play();
        btn.src = 'images/pause.png';
    }
    else {
        backVideo.pause();
        btn.src = "images/play.png";
    }
}