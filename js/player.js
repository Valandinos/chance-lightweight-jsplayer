/**
* Variables globales utilisées à peu près partout dans la suite du code
*/
var player = document.getElementById("player");
var source = document.getElementById("source");
var timer = document.getElementById("timer");
var playlist = document.getElementById("playlist");
var playLoop;
var actualSong = 2; //défini de base à 2 à cause du scandiff de PHP qui ôte les deux premiers éléments ("." et "..")
var diviseur = 1;

/**
* Function de chargement de la chanson dans la balise "audio"
*/
function load(){
    source.src = dir + "/" + songList[actualSong];
    player.load();
    window.clearInterval(playLoop);
}

/**
* Fonction de lecture
*/
function play(){
    showCurrentSong();
    player.play();
    playLoop = setInterval(runningLoop, 1000);
}

/**
* Fonction de mise en pause de la lecture
*/
function pause(){
    player.pause();
    window.clearInterval(playLoop);
}

/**
* Fonction d'arrêt complet de la lecture
* Vide la balise audio et remets tous les compteurs à 0
*/
function stop(){
    player.pause();
    player.currentTime = 0;
    window.clearInterval(playLoop);
    timer.innerHTML = "";
    removeCurrentSong();
    actualSong = 2;
    resetDiviseur();
}

/**
* Fonction de changement de chanson, utilisée par les boutons "précédent" et "suivant"
*/
function changeSong(e){
    removeCurrentSong();
    resetDiviseur();
    if(e == "1" && actualSong <= Object.keys(songList).length){
        actualSong++;
        load();
        play();
    }
    else if(e == "0" && actualSong != 2){
        actualSong--;
        load();
        play();
    }
    else {
      showCurrentSong();
    }
}

/**
* Boucle de lecture
* Permet l'affichage du temps écoulé lors de lecture
* Permet le passage automatique à la chanson suivante une fois la lecture de celle en cours terminée
* L'affichage correct de la durée écoulée est un peu capricieux au moment du passage d'une minute à l'autre,
* alors il a fallu bricoler un peu pour que ça fonctionne. C'est pas propre du tout, mais ça tourne.
*/
function runningLoop(){
    var totalDuration = " / " + Math.floor(player.duration/60) + ":" + Math.round(player.duration%60);
    var currentSec;
    var currentMinute;
    var dot;
    if (player.currentTime/diviseur > 59 && player.currentTime/diviseur < 60) {
        currentMinute = Math.round(player.currentTime/60);
        currentSec = 0;
        diviseur++;
    }
    else {
        currentMinute = Math.floor(player.currentTime/60);
        currentSec = Math.round(player.currentTime%60);
    }
    if(currentSec <= 9){
      var dot = ":0";
    }
    else {
      var dot = ":"
    }
    timer.innerHTML = currentMinute + dot + currentSec + totalDuration;
    if(player.ended == true){
        changeSong(1);
    };
}

/**
* Fonction de génération de la liste de lecture
*/
function showPlaylist(){
    var tabLength = Object.keys(songList).length + 2;
    var list = "<dl>";
    for(i = 2; i<tabLength; i++){
        list += "<dt id=" + i + " onclick=switchCurrentSong(this);" + ">" + songList[i] + "</dt>";
    }
    list += "</dl>";
    playlist.innerHTML = list;
}

/**
* Fonction de mise en évidence de la chanson actuellement en cours de lecture
*/
function showCurrentSong(){
    document.getElementById(actualSong).className = "currentlyPlaying";
}

/**
* Fonction servant à enlever la mise en évidence de la chanson actuellement en cours de lecture
*/
function removeCurrentSong(){
    document.getElementById(actualSong).removeAttribute("class");
}

/**
* Fonction servant à changer la chanson en cours de lecture par celle sur laquelle on a cliqué dans la liste de lecture
*/
function switchCurrentSong(x){
    removeCurrentSong();
    resetDiviseur();
    var current = x.getAttribute("id");
    actualSong = current;
    load();
    play();
}


function resetDiviseur(){
    diviseur = 1;
}
/**
*
*/
function calculateTimePassed(){
    var currentTime = player.currentTime;
    var totalTime = player.duration;
    var percentage = (currentTime/totalTime)
}
