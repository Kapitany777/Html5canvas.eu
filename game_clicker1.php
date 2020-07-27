<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="javascript/colorUtils.js"></script>
        <script type="text/javascript" src="javascript/clicker1/clicker1.js"></script>
        
        <style type="text/css">
            div#content
            {
                text-align: center;
            }
        </style>
        
        <title>HTML5 Canvas - Clicker One</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Clicker One");
        ?>
        
        <div id="content">
            <h2 id="level"></h2>
            
            <canvas id="game" width="600" height="400">
                Sorry, your web browser does not support Canvas content.
            </canvas>
            
            <p>
                Klikkelj! Verekedd át magad a tébolyult tudós borzalmas katakombáin,
                és győzd le mind a tíz szint rettenetes szörnyeit, hogy ne boruljon örök sötétségbe a világ...
            </p>
            
            <p style="text-align: center;">
                <input type="button" id="buttonRestart" value="Restart">
            </p>
            
            <?php Back(); ?>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
