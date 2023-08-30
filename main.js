var aud = document.getElementById("myAudio");
var timeRange = document.getElementById("time");
var songList = document.querySelectorAll(".songs button");
var img = document.querySelector("div figure img");

function changeRangeVlaue() {
    timeRange.value = aud.currentTime;
}

window.addEventListener("load", function () {
    timeRange.max = aud.duration;
});

function changeTime() {
    aud.currentTime = timeRange.value;
}

function changeVol() {
    var volRnge = document.querySelectorAll("div section input[type='range']")[1];
    aud.volume = volRnge.value;
}

function playAud() {
    aud.play();
}

function pauseAud() {
    aud.pause();
}

function stopAud() {
    aud.load();
    aud.pause();
}

songList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        stopAud();
        aud.children[0].setAttribute(
            "src",
            `./songs/${e.target.innerHTML}.mp3`
        );
        timeRange.setAttribute("max", `${parseInt(aud.duration)}`);
        playAud();
        img.setAttribute("src", `./imgs/${e.target.innerHTML}.jpg`);
    });
});
