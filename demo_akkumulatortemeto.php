<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>
        
        <script type="text/javascript" src="javascript/akkumulatortemeto/adatbazis.js"></script>
        <script type="text/javascript" src="javascript/akkumulatortemeto/cegnevgenerator.js"></script>
        <script type="text/javascript" src="javascript/akkumulatortemeto/nevgenerator.js"></script>
        <script type="text/javascript" src="javascript/akkumulatortemeto/nyelvtan.js"></script>
        <script type="text/javascript" src="javascript/akkumulatortemeto/tortenet.js"></script>
        
        <title>JavaScript - Történetek az akkumulátortemetőből</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("A horror story");
        ?>
                
        <div id="content">
            <div class="text">
                <h2 id="tortenetCime">A történet címe</h2>
                
                <p id="tortenetSzovege">A történet szövege</p>
                
                <p class="center">
                    <button class="generate" onclick="TortenetGeneralasa();">Új történet generálása</button>
                </p>
                
                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
