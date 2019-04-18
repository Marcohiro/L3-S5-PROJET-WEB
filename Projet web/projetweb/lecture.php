<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title>Lecture du Tableau Choisi</title>
		<link href="projet.css" type="text/css" rel="stylesheet" title="projet.css" />
		<meta charset="UTF-8">
		<script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>
		<script language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!--<script src ="https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/dessin.js"></script>-->
		<script src ="dessin.js"></script>
		<style>
			canvas {
				border-style : solid;
			}
		</style>
	</head>
	<body>
	<h1>
	<p>Positions :</p>
	<canvas id="positions" width="1000" height="500">
            Message pour les navigateurs ne supportant pas encore canvas.
    </canvas>
	<p>Angles :</p>
	<canvas id="angles" width="1000" height="500">
            Message pour les navigateurs ne supportant pas encore canvas.
        </canvas>
	</h1>
	<p>
		<?php
			$directory = __DIR__ . '/DATAS';
			$fichiers = scandir($directory);
			if(!isset($_POST['lechoisi'])){
				echo "Faites au moins un choix !";
				echo " <a href = 'bdentiere.php' >Retour au choix!!</a>";
			} else {
				if(isset($_POST['lechoisi']) && !isset($_POST['lechoisi2']) || $_POST['lechoisi2'] == $_POST['lechoisi'] ||  $_POST['lechoisi2'] == "NADA2") {
					//Dessins 1 geste choisi
					$index = intval($_POST['lechoisi']);
					$string = file_get_contents($directory.'/'.$fichiers[$index]);
					echo"<button>Calcul Interval</button>";
					echo "</br>";
					echo"<button onclick='dessinDansCanvasAngles($string);'>Dessin 3 Courbes Angles</button>";
					echo"<button onclick='fusion3AxesAngles($string);'>Dessin Courbe Moyennes des Angles </button>";
					echo"<button onclick='dessinDansCanvasPositions($string);'>Dessin 3 Courbes Positions</button>";
					echo"<button onclick='fusion3AxesPositions($string);'>Dessin Courbe Moyennes des Position</button>";
					echo"<button>Calcul Interval</button>";
					echo "</br>";
					echo"<button onclick='effacerMoyenneAngles($string)'>Effacer Courbe Moyennes Angles</button>";
					echo"<button onclick='effacerAngle($string, 1)'>Effacer Alpha</button>";
					echo"<button onclick='effacerAngle($string, 2)'>Effacer Beta</button>";
					echo"<button onclick='effacerAngle($string, 3)'>Effacer Gamma</button>";
					echo"<button onclick='effacerMoyennePositions($string)'>Effacer Courbe Moyennes Positions</button>";
					echo"<button onclick='effacerPosition($string, 1)'>Effacer X</button>";
					echo"<button onclick='effacerPosition($string, 2)'>Effacer Y</button>";
					echo"<button onclick='effacerPosition($string, 3)'>Effacer Z</button>";
					echo "</br>";
					echo"<button onclick='redessinnerAngle($string, 1)'>Redessinner Alpha</button>";
					echo"<button onclick='redessinnerAngle($string, 2)'>Redessinner  Beta</button>";
					echo"<button onclick='redessinnerAngle($string, 3)'>Redessinner Gamma</button>";
					echo"<button onclick='redessinnerMoyennesAngles($string)'>Redessinner Moyennes Angles</button>";
					echo"<button onclick='redessinnerPosition($string, 1)'>Redessinner  X</button>";
					echo"<button onclick='redessinnerPosition($string, 2)'>Redessinner Y</button>";
					echo"<button onclick='redessinnerPosition($string, 3)'>Redessinner  Z</button>";
					echo"<button onclick='redessinnerMoyennesPositions($string)'>Redessinner Moyennes Positions</button>";
					echo "</br>";
					echo"<button onclick='effacerAngles()'>Effacer Angles</button>";
					echo"<button onclick='effacerPositions()'>Effacer Positions</button>";
				}	else if(isset($_POST['lechoisi']) && isset($_POST['lechoisi2']) && $_POST['lechoisi'] != $_POST['lechoisi2'] && $_POST['lechoisi2'] !='NADA2'){
					//Dessin 2 gestes choisis
					$index = intval($_POST['lechoisi']);
					$index2 = intval($_POST['lechoisi2']);
					$string = file_get_contents($directory.'/'.$fichiers[$index]);
					$string2 = file_get_contents($directory.'/'.$fichiers[$index2]);
					echo"<button>Calcul Interval</button>";
					echo "</br>";
					echo"<button onclick='dessinDansCanvasAnglesDouble($string, $string2);'>Dessin 3 Courbes Angles Double</button>";
					echo"<button onclick='fusion3AxesAnglesDouble($string, $string2);'>Dessin 1 courbe Angles Double</button>";
					echo"<button onclick='dessinDansCanvasPositionsDouble($string, $string2);'>Dessin 3 Courbes Positions Double</button>";
					echo"<button onclick='fusion3AxesPositionsDouble($string, $string2);'>Dessin 1 courbe Position Double</button>";
					echo "</br>";
					echo"<button onclick='effacerMoyenneAnglesDouble($string, $string2)'>Effacer Courbe Moyennes Angles Double</button>";
					echo"<button onclick='effacerAngle2($string, $string2, 1)'>Effacer Alpha Double</button>";
					echo"<button onclick='effacerAngle2($string, $string2, 2)'>Effacer Beta Double</button>";
					echo"<button onclick='effacerAngle2($string, $string2, 3)'>Effacer Gamma Double</button>";
					echo"<button onclick='effacerMoyennePositionsDouble($string, $string2)'>Effacer Courbe Moyennes Positions Double</button>";
					echo"<button onclick='effacerPosition2($string, $string2, 1)'>Effacer X Double</button>";
					echo"<button onclick='effacerPosition2($string, $string2, 2)'>Effacer Y Double</button>";
					echo"<button onclick='effacerPosition2($string, $string2, 3)'>Effacer Z Double</button>";
					echo "</br>";
					echo"<button onclick='redessinnerAngle2($string, $string2, 1)'>Redessinner Alpha Double</button>";
					echo"<button onclick='redessinnerAngle2($string, $string2, 2)'>Redessinner  Beta Double</button>";
					echo"<button onclick='redessinnerAngle2($string, $string2, 3)'>Redessinner Gamma Double</button>";
					echo"<button onclick='redessinnerMoyennesAnglesDouble($string, $string2)'>Redessinner Moyennes Angles Double</button>";
					echo"<button onclick='redessinnerPosition2($string, $string2, 1)'>Redessinner  X Double</button>";
					echo"<button onclick='redessinnerPosition2($string, $string2, 2)'>Redessinner Y Double</button>";
					echo"<button onclick='redessinnerPosition2($string, $string2, 3)'>Redessinner  Z Double</button>";
					echo"<button onclick='redessinnerMoyennesPositionsDouble($string, $string2)'>Redessinner Moyennes Positions Double</button>";
					echo "</br>";
					echo"<button onclick='effacerAngles()'>Effacer Angles Double</button>";
					echo"<button onclick='effacerPositions()'>Effacer Positions Double</button>";
				} 
			}
		?>
	<h2>
		<a href = 'bdentiere.php' >Retour au choix!!</a>
	</h2> 
	</body>
</html>