<?php
	session_start();
	if(isset($_SESSION["username"])){
		
	} else {
		$_SESSION["username"]= '';
	}
?>
<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title>Projet</title>
		<link href="projet.css" type="text/css" rel="stylesheet" title="projet.css" />
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!--<script src ="https://tp-ssh1.dep-informatique.u-psud.fr/~mpetit4/verifieFormulaire.js"></script>-->
		<!--<script src ="https://tp-ssh1.dep-informatique.u-psud.fr/~mpetit4/captureMouvement.js"></script>-->
		<!--<script src ="https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/captureMouvement.js"></script>-->
		<script src ="verifieFormulaire.js"></script>
		<script src ="captureMouvements.js"></script>
		<script src ="modifiePage.js"></script>
	</head>
	<body>
		<h1>
		<?php 
		//Affiche le formulaire de connexion si l'utilisateur n'est pas connecté
		if(!$_SESSION['username']){
			//Si l'utilisateur n'a toujours pas rempli le formulaire de connection
			if(!isset($_POST['connexion']) && $_SESSION["username"] !=''){
				afficherFormulaire();
				echo "<p>Pas de compte?</p>";
				echo '<p>Créez votre compte<a href = "creationCompte.php" >&nbsp;ici</a></p>';
			} else {
				if(isset($_POST['Identifiant']) && isset($_POST['MotDePasse'])){
					//Si l'identifiant et le mot de passe ont été saisis
					$directory = __DIR__;
					$f = "identifiants.txt";
					$file = $directory."/".$f;
					if(!idExisteDeja($file)){
					//Si l'identifiant n'a jamais été crée
					afficherFormulaire();
					echo "Le pseudo n'existe pas, créez votre compte "."<a href = 'creationCompte.php' >&nbsp;ici</a>";
					} else {
						//Si le pseudo existe, alors on vérifie le mot de passe
						$hash = getHash($file);
						if(!password_verify($_POST["MotDePasse"], $hash)){
							//Mauvais mot de passe
							echo "Mauvais mot de passe saisi";
							afficherFormulaire();
						} else {
							echo "Vous êtes connecté en tant que".$_SESSION['username']." ! ";
							var_dump($_SESSION['username']);
							$_SESSION["username"] = $_POST["Identifiant"];
							//On rafraîchit la page 
							header("Refresh:0");
						}
					}
				} else {
					//Si le mot de passe ou l'identifiant n'ont pas été saisi.
					echo "Veuillez saisir votre identifiant et votre mot de passe";
					afficherFormulaire();
					echo "<p>Pas de compte?</p>";
					echo '<p>Créez votre compte<a href = "creationCompte.php" >&nbsp;ici</a></p>';
				}
			}

		//Affiche cet écran si l'utilisateur est bien connecté
		} else {
			echo "<p>Bienvenue"." ".$_SESSION['username']."</p>";
			echo "<form method='post'>";
   			echo "<input type='submit' name='deco' id='deco' value='Deconnection' /><br/>";
			echo "</form>";
			
			//Fonction qui permet la déconnection
			function deconnection(){
				session_destroy();
				echo "Vous êtes déconnecté";
				$_SESSION["username"] = '';
				//On rafraîchit la page 
				header("Refresh:0");
			}
			
			//Appelle la déconnection si le bouton Deconnection est pressé
			if(array_key_exists('deco',$_POST)){
   				deconnection();
			}
		}

		//Fonction qui vérifie que l'identifiant existe bien dans la base de données
		function idExisteDeja($fileName){
			$string = file_get_contents($fileName);
			$string = str_replace("[", "", $string);
			$string = str_replace("]", "", $string);
			$array = explode(";", $string);
			for($i=0;$i<count($array);$i++){
				$res = explode(",", $array[$i]);
				if($res[0] == $_POST['Identifiant']){
					return true;
				}
			}
			return false;
		}

		//Fonction pour afficher le formulaire
		function afficherFormulaire(){
			echo "<form action='' method='post'>";
			echo 'Identifiant : <input type="text" name = "Identifiant" size ="12" placeholder="Ex: user" onblur="verifiePseudo(this)">';
			echo 'MotDePasse : <input type="password" name = "MotDePasse" size ="12" placeholder="Ex: MDP">';
			echo '<input type ="submit" name = "connexion" value ="connexion" id="connexion">';
			echo '</form>';	
		}

		function getHash($fileName){
			$string = file_get_contents($fileName);
			$string = str_replace("[", "", $string);
			$string = str_replace("]", "", $string);
			$array = explode(";", $string);
			for($i=0;$i<count($array);$i++){
				$res = explode(",", $array[$i]);
				if($res[0] == $_POST['Identifiant']){
					return $res[1];
				}
			}
		}
		?>
		</h1>
		<h2>
		Recherche dans la base de données:
		<!--	<form id="accesBDD" method="get" action ="https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/projet.php" onsubmit="return verifForm(this)">-->
		<form id="accesBDD" method="get" action ="projet.php" onsubmit="return verifForm(this)">
		<!--	Utilisateur : <input type="text" name = "champ1" size ="12" placeholder="Ex: user" onblur="verifiePseudo(this)">-->
			<?php
				$directory = __DIR__ . '/DATAS';
				$fichiers = scandir($directory);
				echo 'Utilisateur : <SELECT id="psd" name ="champ1" size="1">';
				for($i = 0; $i<count($fichiers);$i++){
					if($fichiers[$i]== "." || $fichiers[$i] == ".."){
						//Ne fait rien
					} else{
						//On permet la selection parmis une liste d'utilisateurs qui ont enregistré un mouvement.
						//Un utilisateur enregistré qui n'a effectué aucun mouvement n'apparaîtra donc pas dans ce select.
						$string = file_get_contents($directory.'/'.$fichiers[$i]);
						$json_a = json_decode( $string, true );
						if($json_a['nom'] != ""){
							echo  "<option>".$json_a['nom']."</option>";
						}
					}
				}
				echo "</SELECT>";
			?>
			Date début: <input type="text" name = "champ2" size ="12" placeholder="jj-mm-aaaa" onblur="verifieDate(this)">
			Date fin: <input type="text" name = "champ3" size ="12" placeholder="jj-mm-aaaa" onblur="verifieDate(this)">
			Type de mouvements: <SELECT id='mvt'name="champ4" size="1">
							<OPTION>Coup Droit
							<OPTION>Coup Gauche
							<OPTION>Direct Droit
							<OPTION>Direct Gauche
							<OPTION>Coup Haut en Bas
							<OPTION>Uppercut Droit
							<OPTION>Uppercut Gauche
							</SELECT>
		    Durée: <input type="text" name = "champ6" size ="12" placeholder="2">
			<input type ="hidden" name = "lignes" value = "Envoi" id="envoi">
			<input type ="submit">	
		</form>
	<!--<a href = "https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/bdentiere.php" >Acces à la base direct</a>-->
	<!--<a href = "bdentiere.php" >Acces à la base direct</a>-->

		</h2>
		<h3>
		Application d'enregistrement:
		<?php
			 if($_SESSION['username']){
				echo 'Utilisateur : <input id="pseudo" type="text" name = "champ5" size ="12" value='.$_SESSION["username"].' disabled>';
			 } else {
				 echo 'Utilisateur : <input id="pseudo" type="text" name = "champ5" size ="12" placeholder="Ex: user" onblur="verifiePseudo(this)">';
			 }
		?>
	    Type de mouvements: <SELECT id='mvt' size="1">
							<OPTION>Coup Droit
							<OPTION>Coup Gauche
							<OPTION>Direct Droit
							<OPTION>Direct Gauche
							<OPTION>Coup Haut en Bas
							<OPTION>Uppercut Droit
							<OPTION>Uppercut Gauche
							</SELECT>
		<br/>
		</h3>
		<h4>
		<?php
			if(!$_SESSION['username']){
				//Si l'utilisateur n'est pas connecté, affiche cette page
				echo '<button id="capture" disabled=disabled onclick="lancerEnregistrement()">Enregistrer</button>';
				echo '<button id="arret" disabled=disabled onclick="stop()">Stop</button>';
				echo "<p id='pseudo2'>Veuillez ecrire un pseudo ou enregistrez vous</p>";
			} else {
				//Sinon affiche cette version de la page
				echo '<button id="capture" onclick="lancerEnregistrement()">Enregistrer</button>';
				echo '<button id="arret" disabled=disabled onclick="stop()">Stop</button>';
			}
		?>
		<p id="msg">Enregistrements des mouvements : </p>
		<p id='enCours'></p>
		<p id='coords'></p>
		<p id='angles'></p>
		<p id='COMPTEURS'></p>
		</h4>
	</body>
</html>