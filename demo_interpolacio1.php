<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="javascript/interpolacio1/interpolacio1.js"></script>
        
        <script type="text/javascript">
            window.onload = function() { Init(); Draw(); }
        </script>
        
        <title>HTML5 Canvas - Lineáris interpoláció</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Lineáris interpoláció");
        ?>
        
        <div id="canvasDiv">
            <canvas id="canvasInterpolation" width="600" height="400">
                Sorry, your web browser does not support Canvas content.
            </canvas>
            
            <?php Back(); ?>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
