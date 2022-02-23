<?php

function PageHeader()
{
    print("<div id=\"header\">\n");
    print("    <div id=\"mainLogo\">\n");
    print("        <a href=\"index.php\">\n");
    print("            <img src=\"images/HTML5_Logo_64.png\" alt=\"logo\" width=\"64\" height=\"64\">\n");
    print("        </a>\n");
    print("    </div>\n");
            
    print("    <div id=\"mainTitle\">\n");
    print("        <a href=\"index.php\">HTML5Canvas.eu</a>\n");
    print("    </div>\n");
            
    print("    <div id=\"mainMenu\">\n");
    print("        <ul>\n");
    print("            <li><a href=\"demok.php\">Demók</a></li>\n");
    print("            <li><a href=\"konyvek.php\">Könyvek</a></li>\n");
    print("            <li><a href=\"linkek.php\">Linkek</a></li>\n");
    print("            <li><a href=\"impresszum.php\">Impresszum</a></li>\n");
    print("        </ul>\n");
                
    print("        <img src=\"images/HTML5_3D_Effects_64.png\" alt=\"canvas\" width=\"64\" height=\"64\">\n");
    print("    </div>\n");
    print("</div>\n");
}

function PageH1($h1Text)
{
    print("<div id=\"pageHeader\">\n");
    print("    <h1>" . $h1Text . "</h1>\n");
    print("</div>\n");
}

function PageFooter()
{
    print("<div id=\"footer\">\n");
    print("    <div id=\"copyright\">\n");
    print("        <a href=\"https://braincluster.eu/\" target=\"_blank\">&copy; 2001-2022 Brain Cluster Inc.</a>\n");
    print("    </div>\n");
            
    print("    <div id=\"impresszum\">\n");
    print("        <a href=\"impresszum.php\">Impresszum</a>\n");
    print("    </div>\n");
    print("</div>\n");
}

function Back()
{
    print("<p>\n");
    print("     <a href=\"javascript:history.back();\">Előző oldal</a>\n");
    print("</p>\n");
}

?>
