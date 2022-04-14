<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        <title>HTML5 Canvas - Impresszum</title>
    </head>
    
    <body>
        <?php 
        PageHeader();
        PageH1("Impresszum");
        ?>
        
        <div id="content">
            <div class="text" style="min-height: 420px;">
                <img src="images/impresszum/kapitany.jpg" style="float: left; margin: 5px 20px;">
                <p class="impresszum">
                    Az oldalt készítette: Kapitány (Török Viktor)<br>
                    <a href="https://www.linkedin.com/in/viktor-t%C3%B6r%C3%B6k-65b7a067/" target="_blank">LinkedIn profile</a><br>
                    <a href="https://github.com/Kapitany777" target="_blank">GitHub profile</a><br>
                    <a href="https://profile.codersrank.io/user/kapitany777" target="_blank">CodersRank profile</a><br>
                    <a href="https://stackoverflow.com/users/12930552/kapitany" target="_blank">Stack Overflow profile</a><br>
                    <a href="https://www.braincluster.eu/" target="_blank">Brain Cluster Inc. - blog a programozásról</a><br>
                    E-mail cím: <a href="mailto:kapitany@lidercfeny.hu">kapitany@lidercfeny.hu</a>
                </p>
            </div>
        </div>
        
        <?php PageFooter(); ?>
        
    </body>
</html>
