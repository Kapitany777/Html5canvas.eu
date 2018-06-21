<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="javascript/colorUtils.js"></script>
        <script type="text/javascript" src="javascript/ants/ants.js"></script>
        
        <title>HTML5 Canvas - Hangyák I.</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Hangyák I.");
        ?>
        
        <div id="canvasDiv">
            <canvas id="canvasField" width="600" height="400">
                Sorry, your web browser does not support Canvas content.
            </canvas>
        
            <?php Back(); ?>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
