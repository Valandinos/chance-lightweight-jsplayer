<?php
$dir = './Music';
$output = array_diff(scandir($dir), array('.', '..'));
echo $dir;
/*foreach ($output as $song){
    echo '"./Music/';
    echo "$song";
    echo '", ';
    
}*/
$toJson = json_encode($output);
?>
<script>
    var songList = <?php echo $toJson; ?>
</script>