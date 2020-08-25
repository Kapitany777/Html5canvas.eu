<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        <title>HTML5 Canvas - Demók</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("HTML5 Canvas Demók");
        ?>
        
        <div id="content">
            <div class="text">
                Ezen az oldalon az általunk készített, JavaScriptet és HTML5 Canvas-t használó programokat mutatjuk be.
            </div>
            
            <div class="text">
                <h2 class="democategory">Játékok HTML5-ben és JavaScriptben</h2>
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
            
            
            <div class="text">
                <h2 class="democategory">Animációk</h2>
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
            
            <div class="demo">
                <h3>Hangyák I.</h3>
                
                <p>
                    A hangyák elhordják a különböző színű köröket.
                </p>
                
                <p>
                    <a href="demo_ants.php">Itt szaladgálnak a hangyák</a>
                </p>
            </div>
            
            
            <div class="text">
                <h2 class="democategory">Interpoláció</h2>
            </div>
            
            <div class="demo">
                <h3>Lineáris interpoláció</h3>
                
                <p>
                    Lineáris interpoláció és animáció.
                </p>
                
                <p>
                    <a href="demo_interpolacio1.php">Itt mozognak a szakaszok</a>
                </p>
            </div>
            
            
            <div class="text">
                <h2 class="democategory">Neoprimitivizmus, madlib</h2>
            </div>
            
            <div class="demo">
                <h3>Tőzsdei tanácsadó program</h3>
                
                <p>
                    Különleges tudományos módszereinkkel megjósoljuk a tőzsdei árfolyamok alakulását.
                    Kéretik nem komolyan venni :-)
                </p>
                
                <p>
                    <a href="demo_tozsde.php">Itt található az előrejelzés</a>
                </p>
            </div>
            
            <div class="demo">
                <h3>Áttörés a bozótoson</h3>
                
                <p>
                    Mozgó vonalak és zene, neoprimitív demó...
                </p>
                
                <p>
                    <a href="demo_bozotos.php">Itt lehet áttörni a bozótoson</a>
                </p>
            </div>
            
            <div class="demo">
                <h3>Történetek az akkumulátortemetőből</h3>
                
                <p>
                    Egy madlib program horrorfilm forgatókönyvek generálására.
                </p>
                
                <p>
                    <a href="demo_akkumulatortemeto.php">Lássuk a forgatókönyvet!</a>
                </p>
            </div>
            
            <div class="demo">
                <h3>Városnév-generátor</h3>
                
                <p>
                    Egy madlib program magyar településnevek generálására.
                </p>
                
                <p>
                    <a href="demo_varosnev.php">Városnevek generálása...</a>
                </p>
            </div>
            
            <div class="demo">
                <h3>Kifogás-generátor</h3>
                
                <p>
                    Egy madlib program különféle kifogások generálására. Az alapötlet nem az enyém. Fészbúkon kaptam egy alap táblázatot, majd bővítettem ill. módosítottam az adatbázist.
                </p>
                
                <p>
                    <a href="demo_kifogas.php">Kifogások generálása...</a>
                </p>
            </div>
            
            <div class="demo">
                <h3>Leleplező politikai cikk generátor</h3>
                
                <p>
                    Egy madlib program, melynek segítségével politikai ellenfeleinket leleplező cikkeket lehet generálni.
                </p>
                
                <p>
                    <a href="demo_lejaratas.php">Leleplező cikk generálása...</a>
                </p>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
