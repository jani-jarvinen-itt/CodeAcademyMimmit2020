<html>
<head>
	<title>Muuttujat.php</title>
</head>
<body>
    <h1>Muuttujat.php</h1>

    <p>Nimi-parametrin arvo:
        <?php 
        if (empty($_GET["nimi"])) {
            echo "(ei nimeä)";
        }
        else {
        echo $_GET["nimi"];
        }
        ?>
    </p>

    <h2>Numerot</h2>
    <?php
    
    for ($i = 1; $i <= 10; $i++) {
        echo "<p>" . $i . "</p>";
    }
    ?>
</body>
</html>
