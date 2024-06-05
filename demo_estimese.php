<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">

        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>

        <script type="text/javascript" src="javascript/estimese/nyelvtan.js"></script>
        <script type="text/javascript" src="javascript/estimese/estimese.js"></script>
        <script type="text/javascript" src="javascript/estimese/adatbazis.js"></script>

        <!-- ACHTUNG!!! -->
        <script type="text/javascript" src="javascript/akkumulatortemeto/adatbazis.js"></script>

        <title>HTML5 Canvas - Esti mese</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Esti mese");
        ?>
        
        <div id="content">
            <div class="text">
                <h2 id="meseCime">Esti mese</h2>

                <p id="meseSzovege">A történet szövege</p>

                <p class="center">
                    <button class="generate" onclick="EstiMeseGeneralasa();">Új esti mese generálása</button>
                </p>

                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
