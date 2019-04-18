<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title>Le formulaire</title>
		
	        <link href="tab.css" type="text/css" rel="stylesheet" title="tab.css" />
		
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script>
			
			function colorie(){
			var tds = document.getElementById("fond_a_changer");
			console.log("a");
			console.log(tds);
			for(var i = 0;i<tds.length; i++){
				console.log(tds[i]);
				//tds[i].style.background = "red";
			}
		
		}
	
	/*	$("td#fonc_a_changer").ready(function(){
			$("td#fond_a_changer").css("background-color","red");
			});*/
			
		</script>
	</head>
	<body>
		<h1>
			<p>
			<button onclick="colorie()">Try it</button>
			<?php
			//$file = fopen(__DIR__."/files/messages.txt", "r") or die("Unable to open file!");		
			$file = __DIR__."/files/messages.txt";
			$current = file_get_contents($file);
			$current = $current .' '. $_GET["champ1"];
			$current = $current .' '. $_GET["champ2"];
			$current = $current .' '. $_GET["champ3"];
			$current = $current . "\n";
			file_put_contents($file, $current);
			?>
			</p>
		<?php
			$file = __DIR__."/files/messages.txt";		
			$lines = file($file);
			$count = count($lines);
			trim($file);
			echo "Le nombre de ligne du fichier est de : $count";
			echo "<table>";
			echo "<tr><th>Lignes</th><th>Nom</th><th>Prenom</th><th></th><th>Message</th></tr>";
			for($i=1; $i<$count;$i=$i+1){
				$textes = explode(" ", $lines[$i]);
				echo "<tr><td>Ligne : $i </td><td id = 'fond_a_changer'>$textes[1]</td><td>$textes[2]</td><td>a écrit : </td><td>$textes[3]</td></tr>";
			}
			echo "</table>";
		?>
		</h1>
	</body>
</html>
