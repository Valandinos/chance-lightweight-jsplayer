var player = document.getElementById("player");
var source = document.getElementById("source");
var timer = document.getElementById("timer");
var playlist = document.getElementById("playlist");
var writeTime;
var actualSong = 0;

function loaded(){
    source.src = songList[actualSong];
    player.load();
    showPlaylist();
}

function play(){
    player.play();
    writeTime = setInterval(runningLoop, 1000);
}

function pause(){
    player.pause();
    window.clearInterval(writeTime);
}

function stop(){
    player.pause();
    player.currentTime = 0;
    window.clearInterval(writeTime);
    timer.innerHTML = "";
}

function changeSong(e){
    if(e == "1"){
        actualSong++;
    }
    else{
        actualSong--;
    }
    source.src = songList[actualSong];
    player.load();
    window.clearInterval(writeTime);
    play();
}

function runningLoop(){
    timer.innerHTML = Math.round(player.currentTime);
    if(player.ended == true){
        changeSong(1);
    };
}

function showPlaylist(){
    var tabLength = songList.length;
    var text = "<dl>";
    for(i =0; i<tabLength; i++){
        text += "<dt>" + songList[i] + "</dt>";
    }
    text += "</dl>";
    playlist.innerHTML = text;
}
/*
 * TODO:
 * implémenter la lecture automatique DONE
 * implémenter une barre d'état
 * implémenter le temps écoulé correctement
 * implémenter l'affichage de la playlist DONE
 * implémenter la possibilité d'interragir avec la playlist
 */