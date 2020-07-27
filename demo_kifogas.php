<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.5.1.min.js"></script>
        
        <script type="text/javascript" src="javascript/kifogas/adatbazis.js"></script>
        <script type="text/javascript" src="javascript/kifogas/kifogas.js"></script>
        
        <title>JavaScript - Kifogás-generátor</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Kifogás-generátor");
        ?>
                
        <div id="content">
            <div class="text">
                <p id="kifogas" class="kifogas"></p>
                
                <p class="center">
                    <button class="generate" onclick="KifogasGeneralasa();">Új kifogás generálása</button>
                </p>
                
                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
