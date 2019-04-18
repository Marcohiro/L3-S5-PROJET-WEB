<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title></title>
	        <link href="tab.css" type="text/css" rel="stylesheet" title="tab.css" />
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src ="visu.js"></script>
	</head>
	<body>
		<h1>
			<p>
			<?php
				function contains($a, $b){
					return strpos($a, $b) !== false;
				}
				
				function rangeDate($d1, $d2, $d3){
					$date1 = strtotime($d1);
					$date2 = strtotime($d2);
					$date3 = strtotime($d3);
					
					if($date3>$date1){
						if($date3<$date2){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				}
				
				$pattern_date = " /^[0-9]+\-[0-9]+\-[0-9]$/ ";
			
				if(empty($_GET["champ2"])||empty($_GET["champ3"])){
					echo "Il manque des dates";
				}else if(preg_match($pattern_date, $_GET["champ2"])){
					echo "Date 1 INVALIDE";
				}else if(preg_match($pattern_date, $_GET["champ3"])){
					echo "Date 2 INVALIDE";
				}
				if($_GET["champ2"]>$_GET["champ3"]){
					echo 'Merci de mettre des dates cohérentes';
				}
					
				$directory = __DIR__ . '/DATAS';
				$fichiers = scandir($directory);
	
				echo "Faire un choix parmis les propositions suivantes : ";
				echo "<form name = 'choixAFaire'form method='POST' action='lecture.php'>";
				echo "<table><tr><th>Choix</th><th>Nom</th><th>Mouvement</th><th>date</th><th>duree</th></tr>";
				echo "<tr><th><input name='lechoisi2' type='radio' value='NADA2' id='Rien2'></th><th>Aucun Second Choix</th></input></input></tr>";
				for($i = 0; $i<count($fichiers);$i++){
					if($fichiers[$i]== "." || $fichiers[$i] == ".."){
						//NE fait rien
					} else{
						$string = file_get_contents($directory.'/'.$fichiers[$i]);
						$json_a = json_decode( $string, true );
						if(strtolower($json_a['nom']) === strtolower($_GET["champ1"]) || strtolower($json_a['mouvement']) === strtolower($_GET["champ4"]) || rangeDate($_GET["champ2"], $_GET["champ3"], $json_a['date']) || $_GET["champ6"] == $json_a['duree']){
								echo  "<tr><th><input name='lechoisi' type='radio' value='$i' id='$fichiers[$i]'><input name='lechoisi2' type='radio' value='$i' id='$fichiers[$i]'></th><th>".$json_a['nom']."</th><th>".$json_a['mouvement']."</th><th>".$json_a['date']."</th><th>".$json_a['duree']."</th></input></input></tr>";
						}
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