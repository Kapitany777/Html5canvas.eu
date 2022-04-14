<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>
        
        <script type="text/javascript" src="javascript/lejaratas/adatbazis.js"></script>
        <script type="text/javascript" src="javascript/lejaratas/nevgenerator.js"></script>
        <script type="text/javascript" src="javascript/lejaratas/varosnev.js"></script>
        <script type="text/javascript" src="javascript/lejaratas/lejaratas.js"></script>
        
        <!-- ACHTUNG!!! -->
        <script type="text/javascript" src="javascript/kifogas/adatbazis.js"></script>
        <script type="text/javascript" src="javascript/kifogas/kifogas.js"></script>
        
        <title>JavaScript - Leleplező politikai cikk generátor</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Leleplező politikai cikk generátor");
        ?>
                
        <div id="content">
            <div class="text">
                <h2 id="tortenetCime">A történet címe</h2>
                
                <p id="tortenetSzovege">A történet szövege</p>
                
                <p class="center">
                    <button class="generate" onclick="CikkGeneralasa();">Új leleplező cikk generálása</button>
                </p>
                
                <?php Back(); ?>
            </div>

            <div class="text">
                <h2>Lidércgyepűi Odamondós</h2>

                <p>
                    Kedves Olvasónk!<br>
                    Ezen új kezdeményezés célja csakis az igazság kendőzetlen kimondása.
                    Ebből következően nem tartjuk valószínűnek, hogy a régió korrupt, bűnöző életmódot folytató
                    politikusai körében népszerűek leszünk, de annál inkább reméljük, hogy az általuk átvert, kizsákmányolt,
                    nyomorba taszított lakosság értékeli fontos és hiánypótló tevékenységünket.
                </p>

                <p>
                    Felelős szerkesztő: Nagyagárdi-Kis Ödön<br>
                    Szerkesztőség: Panyócaretek, Tanya 27., B épület.
                </p>

                <a href="download/Lidercgyepui_odamondos.pdf">A Lidércgyepűi Odamondós első számának letöltése PDF formátumban</a>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
