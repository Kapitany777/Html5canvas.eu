<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="jquery/jquery-3.7.1.min.js"></script>
        
        <script type="text/javascript" src="javascript/varosnev/varosnev.js"></script>
        
        <title>JavaScript - Városnév-generátor</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Városnév-generátor");
        ?>
                
        <div id="content">
            <div class="text">
                <p id="varosnev" class="varosnev">
                </p>
                
                <p class="center">
                    <button class="generate" onclick="VarosnevGeneralasa();">Új városnév generálása</button>
                </p>
                
                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
