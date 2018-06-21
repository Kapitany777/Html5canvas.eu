<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        
        <script type="text/javascript" src="javascript/tozsde/tozsde.js"></script>
        
        <script type="text/javascript">
            window.onload = function() { Header(); Analysis(); };
        </script>
        
        <style type="text/css">
            #logoContainer
            {
                background-color: #ffffff;
                padding: 0px;
            }
        </style>
        
        <title>HTML5 Canvas - Tőzsdei hírek</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Tőzsdei hírek");
        ?>
        
        <div id="content">
            
            <div id="logoContainer">
                <canvas id="logo" width="900" height="90">
                    Sorry, your web browser does not support Canvas content.
                </canvas>
            </div>
            
            <div class="text">
                <h2>A legfrissebb tőzsdei hírek</h2>

                <h3 id="articleTitle"></h3>

                <p>Elemzés szakértőnktől</p>

                <div style="text-align: center;">
                    <canvas id="graph" width="700" height="400">
                        Sorry, your web browser does not support Canvas content.
                    </canvas>
                </div>

                <div id="analysis"></div>
                
                <?php Back(); ?>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
