<?php
include_once("page.php");
?>

<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="main.css">

    <script type="text/javascript" src="jquery/jquery-3.7.1.min.js"></script>

    <script type="text/javascript" src="javascript/korsagok/korsaggenerator.js"></script>

    <title>JavaScript - Kórság-generátor</title>
</head>

<body>
<?php
PageHeader();
PageH1("Kórság-generátor");
?>

<div id="content">
    <div class="text">
        <p id="korsag" class="korsag">
        </p>

        <p class="center">
            <button class="generate" onclick="KorsagGeneralasa();">Új kórság generálása</button>
        </p>

        <?php Back(); ?>
    </div>
</div>

<?php PageFooter(); ?>

</body>
</html>
