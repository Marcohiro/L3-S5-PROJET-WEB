<?php
	session_start();
?>
<!DOCTYPE html>
<html lang = "fr">
	<head> 
		<title>Creation de votre compte</title>
	        <link href="tab.css" type="text/css" rel="stylesheet" title="tab.css" />
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src ="verifieFormulaire.js"></script>
	</head>
	<body>
		<h1>
			<p>
			<?php 
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
				echo 'Identifiant : <input type="text" name ="Identifiant" size ="12" placeholder="Ex: user" onblur="verifiePseudo(this)">';
				echo '</br>';
				echo 'MotDePasse : <input type="password" name = "MotDePasse" size ="12" placeholder="Ex: MDP" >';
				echo '</br>';
				echo '<input type="submit" name="submit" value="Créé le compte"></button>';
				echo '</form>';
			}

			if(isset($_POST['submit'])){
				//Une fois la connection effectuée
				if(isset($_POST['Identifiant']) && isset($_POST['MotDePasse']) && !empty($_POST['Identifiant']) &&  !empty($_POST['MotDePasse'])){
					$directory = __DIR__;
					$f = "identifiants.txt";
					$file = $directory."/".$f;
					//Si les données ont été saisies correctement
					//On écrit dans le fichier
					//Retour à la ligne quand on a fini d'enregistrer un utilisateur
					if(!idExisteDeja($file)){
						if(file_get_contents($file) == ""){
							$string = '[['.$_POST["Identifiant"].','.password_hash($_POST["MotDePasse"], PASSWORD_DEFAULT).']]';
						} else {
							$string = substr(file_get_contents($file),0 ,-1).';['.$_POST["Identifiant"].','.password_hash($_POST["MotDePasse"], PASSWORD_DEFAULT).']]';
						}
						file_put_contents($file, $string);
						$_SESSION["username"] = $_POST['Identifiant'];
						echo "Bienvenue ".$_SESSION["username"]." !";
						echo "</br>";
						echo '<a href = "accueil.php">Retour au site</a>';
					} else {
						//Si l'ID a déjà été pris
						echo "L'identifiant éxiste déjà, veuillez en choisir un autre";
						afficherFormulaire();
						echo "</br>";
						echo 'Avez-vous un compte? Connectez vous ';
						//echo '<a href = "https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/projet.html">ici</a>';
						echo '<a href = "accueil.php">ici</a>';
					}
				} else {
					//Si les données n'ont pas correctement été saisies
					echo "Remplir correctement les champs";
					afficherFormulaire();
					echo "</br>";
					echo 'Avez-vous un compte? Connectez vous ';
					//echo '<a href = "https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/projet.html">ici</a>';
					echo '<a href = "accueil.php">ici</a>';
				}
			} else{
				//Si l'utilisateur doit s'enregistrer
				echo "Enregistrez-vous";
				afficherFormulaire();
				echo "</br>";
				echo 'Avez-vous un compte? Connectez vous ';
				//echo '<a href = "https://tp-ssh2.dep-informatique.u-psud.fr/~mpetit4/projet.html">ici</a>';
				echo '<a href = "accueil.php">ici</a>';
			}
			?>
			</p>
		</h1>
	</body>
</html>