var video = document.getElementById("myVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pausar";
        } else {
            video.pause();
            playPauseBtn.textContent = "Reproducir";
        }
    });