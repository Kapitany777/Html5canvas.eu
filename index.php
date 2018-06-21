<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        <title>HTML5 Canvas - Főoldal</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("HTML5 CANVAS");
        ?>
        
        <div id="content">
            <div class="text" style="min-height: 250px;">
                
                <h2>HTML5 Canvas és a JavaScript</h2>
                
                <img src="images/HTML5_Logo_128.png" alt="HTML5" style="float: left; margin-right: 20px;">
                
                <p>
                    A Canvas a HTML5 egy nagyszerű újítása, egy olyan felület, amelyre Javascript segítségével mindenféle dolgot rajzolhatunk.
                    Ha bővebben érdekel a HTML5 Canvas (és általában a számítógépes grafika), akkor a <a href="konyvek.php">Könyvek</a> és a
                    <a href="linkek.php">Linkek</a> oldalakon találhatsz néhány tippet, hogy merre érdemes elindulni.
                </p>
                
                <p>
                    A <a href="https://hu.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript programozási nyelv</a> egy objektumalapú, prototípus alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
                </p>
                
                <p>
                    A JavaScriptet és a HTML5 Canvast használó fejlesztéseim eredményét a <a href="demok.php">Demók</a> oldalon lehet megtalálni.
                </p>
            </div>
            
            <div class="demo">
                <h3>Clicker One</h3>
                
                <p>
                    Clicker One: klikkelős játék; canvas, jQuery.
                </p>
                
                <p>
                    <a href="game_clicker1.php">Induljon a játék!</a>
                </p>
            </div>

            <div class="demo">
                <h3>Potyogó téglalapok</h3>
                
                <p>
                    Lefelé potyogó téglalapok a képernyőn + zene.
                </p>
                
                <p>
                    <a href="demo_teglalapok.php">Itt esnek a téglalapok</a>
                </p>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
