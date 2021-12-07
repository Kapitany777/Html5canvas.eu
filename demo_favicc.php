<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>

        <script type="text/javascript" src="javascript/favicc/nyelvtan.js"></script>
        <script type="text/javascript" src="javascript/favicc/varosnev.js"></script>
        <script type="text/javascript" src="javascript/favicc/favicc.js"></script>
        
        <!-- ACHTUNG!!! -->
        <script type="text/javascript" src="javascript/kifogas/adatbazis.js"></script>
        <script type="text/javascript" src="javascript/kifogas/kifogas.js"></script>
        
        <title>JavaScript - Favicc generátor</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Favicc generátor");
        ?>
                
        <div id="content">
            <div class="text">
                <h2 id="viccCime">Egy település elnevezése</h2>
                
                <p id="viccSzovege">A történet szövege</p>
                
                <p class="center">
                    <button class="generate" onclick="FaviccGeneralasa();">Új favicc generálása</button>
                </p>
                
                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
