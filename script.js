/*global document,Audio*/
var audio = new Audio('cloche.mp3');

function play() {
    audio.play();
}

function sonnerie() {
    play();
}

function recree() {
    var x = document.getElementById("duree").selectedIndex,
        y = document.getElementById("duree").options,
        duree = y[x].text;
    play();
    setTimeout(play, duree * 60 * 1000);
}
