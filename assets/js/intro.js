var video = document.getElementById("meinVideo");

video.addEventListener("ended", function() {
    video.pause();
});

window.addEventListener("load", function() {
    video.play();
});

video.controls = false;