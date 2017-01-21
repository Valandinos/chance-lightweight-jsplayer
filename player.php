<?php
session_start();
if (!$_SESSION['logged']) {
  header("Location: index.php");
  exit();
}
session_destroy();
$dir = './Music';
$output = array_diff(scandir($dir), array('.', '..'));
$toJson = json_encode($output);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Audio Player</title>
        <link rel="stylesheet" type="text/css" href="player.css">
        <script>
            var songList = <?php echo $toJson; ?>;
            var dir = "<?php echo $dir; ?>";
        </script>
    </head>
    <body onload="load();showPlaylist();">
        <div id="controls">
            <input type="button" onclick="play();" value="Lecture">
            <input type="button" onclick="pause();" value="Pause">
            <input type="button" onclick="stop();" value="Stop">
            <input type="button" onclick="changeSong(0);" value="Précédente">
            <input type="button" onclick="changeSong(1);" value="Suivante">
            <input type="button" onclick="showPlaylist();" value="Playlist">
            <p id="timer"></p>
        </div>
            <audio id="player">
                <source src="" type="audio/ogg" id="source">
            </audio>
            <div id="playlist">
            </div>
            <div id="testValues"></div>
    </body>
    <script src="player.js"></script>
</html>

<!--
 * TODO:
 * implémenter la lecture automatique DONE
 * implémenter laffichage de la playlist DONE
 * implémenter la possibilité dinterragir avec la playlist DONE
 * implémenter un style correct pour le lecteur EN COURS
 * implémenter une barre détat
 * implémenter le temps écoulé correctement
 * implémenter un gestionnaire de volume
 * implémenter des garde-fou pour le changement de chanson (précédent/suivant) pour ne pas avoir de undefined DONE
-->
