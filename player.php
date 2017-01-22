<?php
if (!$_COOKIE['logging'] == 'logged') {
  header("Location: index.php");
  exit();
}
$dir = './music';
$output = array_diff(scandir($dir), array('.', '..'));
$toJson = json_encode($output);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Audio Player</title>
        <link rel="stylesheet" type="text/css" href="css/player.css">
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/skeleton.css">
        <link rel="icon" type="image/png" href="img/favicon.png">
        <script>
            var songList = <?php echo $toJson; ?>;
            var dir = "<?php echo $dir; ?>";
        </script>
    </head>
    <body onload="load();showPlaylist();">
        <div id="controls">
            <input type="button" onclick="play();" value="Lecture" class="button-primary">
            <input type="button" onclick="pause();" value="Pause" class="button-primary">
            <input type="button" onclick="stop();" value="Stop" class="button-primary">
            <input type="button" onclick="changeSong(0);" value="Précédente" class="button-primary">
            <input type="button" onclick="changeSong(1);" value="Suivante" class="button-primary">
            <input type="button" onclick="showPlaylist();" value="Playlist" class="button-primary">
            <p id="timer"></p>
        </div>
            <audio id="player">
                <source src="" type="audio/ogg" id="source">
            </audio>
            <div id="playlist">
            </div>
            <div id="testValues"></div>
    </body>
    <script src="js/player.js"></script>
</html>
