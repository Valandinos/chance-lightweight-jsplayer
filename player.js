var player = document.getElementById("player");
var source = document.getElementById("source");
var timer = document.getElementById("timer");
var playlist = document.getElementById("playlist");
var playLoop;
var actualSong = 2;

function load(){
    source.src = dir + "/" + songList[actualSong];
    player.load();
    window.clearInterval(playLoop);
}

function play(){
    showCurrentSong();
    player.play();
    playLoop = setInterval(runningLoop, 1000);

}

function pause(){
    player.pause();
    window.clearInterval(playLoop);
}

function stop(){
    player.pause();
    player.currentTime = 0;
    window.clearInterval(playLoop);
    timer.innerHTML = "";
    removeCurrentSong();
}

function changeSong(e){
    removeCurrentSong();
    if(e == "1" && actualSong < Object.keys(songList).length + 1){
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

function runningLoop(){
    var x = player.currentTime;
    timer.innerHTML = Math.floor(x/60) + ":" + Math.round(x%60) +
                      " / " + Math.floor(player.duration/60) + ":" + Math.round(player.duration%60);
    if(player.ended == true){
        changeSong(1);
    };
}

function showPlaylist(){
    var tabLength = Object.keys(songList).length + 2;
    var list = "<dl>";
    for(i = 2; i<tabLength; i++){
        list += "<dt id=" + i + " onclick=switchCurrentSong(this);" + ">" + songList[i] + "</dt>";
    }
    list += "</dl>";
    playlist.innerHTML = list;
}

function showCurrentSong(){
    document.getElementById(actualSong).className = "currentlyPlaying";
}

function removeCurrentSong(){
    document.getElementById(actualSong).removeAttribute("class");
}

function switchCurrentSong(x){
    removeCurrentSong();
    var current = x.getAttribute("id");
    actualSong = current;
    load();
    play();
}
