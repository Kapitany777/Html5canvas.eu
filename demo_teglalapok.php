<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="javascript/colorUtils.js"></script>
        <script type="text/javascript" src="javascript/teglalapok/teglalapok.js"></script>
        
        <script type="text/javascript">
            window.onload = function() { Init(); Draw(); };
        </script>
        
        <title>HTML5 Canvas - Potyogó téglalapok</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Potyogó téglalapok");
        ?>
        
        <div id="canvasDiv">
            <canvas id="canvasRectangles" width="600" height="400">
                Sorry, your web browser does not support Canvas content.
            </canvas>
            
            <?php Back(); ?>
        </div>
        
        <audio autoplay loop>
            <source src="music/rectangles.mp3" type="audio/mpeg">
            <source src="music/rectangles.ogg" type="audio/mpeg">
            Sorry, your browser does not support the audio tag.
        </audio>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
