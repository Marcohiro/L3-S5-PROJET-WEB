<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title>BD entière</title>
	    <link href="tab.css" type="text/css" rel="stylesheet" title="tab.css" />
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<!--<script src ="https://tp-ssh1.dep-informatique.u-psud.fr/~mpetit4/visu.js"></script>-->
		<script src ="visu.js"></script>
	</head>
	<body>
		<h1>
			<p>
			<?php	
				$directory = __DIR__ . '/DATAS';
				$fichiers = scandir($directory);
			
				echo "<form name = 'choixAFaire'form method='POST' action='lecture.php'>";
				echo "<table><tr><th>Choix</th><th>Nom</th><th>Mouvement</th><th>date</th><th>duree</th></tr>";
				echo "<tr><th><input name='lechoisi2' type='radio' value='NADA2' id='Rien2'></th><th>Aucun Second Choix</th></input></input></tr>";
					for($i = 0; $i<count($fichiers);$i++){
					if($fichiers[$i]== "." || $fichiers[$i] == ".."){
						//Do nothing
					} else{
						$string = file_get_contents($directory.'/'.$fichiers[$i]);
						$json_a = json_decode( $string, true );
						echo  "<tr><th><input name='lechoisi' type='radio' value='$i' id='$fichiers[$i]'><input name='lechoisi2' type='radio' value='$i' id='$fichiers[$i]'></th><th>".$json_a['nom']."</th><th>".$json_a['mouvement']."</th><th>".$json_a['date']."</th><th>".$json_a['duree']."</th></input></input></tr>";
					}
				}
				echo "</table>";
				echo "<input type='submit' value='Dessin' onclick='voirTab()'>";
				echo "</form>";
			?>
			</p>
		</h1>
	</body>
</html>