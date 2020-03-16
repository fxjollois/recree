/*global setTimeout,$,Audio*/
var audio = new Audio('cloche.mp3');

function curseur(statut) {
    $("body").css("cursor", statut);
    $("div").css("cursor", statut);
}

function ring() {
    audio.play();
    curseur('default');
}

function sonnerie() {
    ring();
}

function recree() {
    var duree = $("#duree option:selected").text();
    ring();
    curseur('wait');
    setTimeout(ring, duree * 60 * 1000);
}
