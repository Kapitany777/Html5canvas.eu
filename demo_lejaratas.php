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
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
