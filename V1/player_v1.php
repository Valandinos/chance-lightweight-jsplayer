<?php
$dir = './Music';
$output = array_diff(scandir($dir), array('.', '..'));
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Audio Player</title>
        <script>
            var songList = [<?php foreach ($output as $song){echo '"./Music/';echo "$song";  echo '", ';}  ?>];
        </script>
    </head>
    <body onload="loaded();">
            <input type="button" onclick="play();" value="Lecture">
            <input type="button" onclick="pause();" value="Pause">
            <input type="button" onclick="stop();" value="Stop">
            <input type="button" onclick="changeSong(0);" value="Précédente">
            <input type="button" onclick="changeSong(1);" value="Suivante">
            <input type="button" onclick="showPlaylist();" value="Playlist">
            <p id="timer"></p>
            <audio id="player">
                <source src="" type="audio/ogg" id="source">
            </audio>
            <div id="playlist">
            </div>
    </body>
</html>
<script src="player.js"></script>