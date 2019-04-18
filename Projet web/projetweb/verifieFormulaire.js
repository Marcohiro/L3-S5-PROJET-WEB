//Code pompé de https://openclassrooms.com/fr/courses/146276-tout-sur-le-javascript/144576-td-verification-dun-formulaire
//Colorie une case du formulaire si celui-ci ne respecte pas les conditions, i.e les placeholder. Ce n'est qu'une modification hestetique, PHP gère mieux les interdictions
function surligne(champ, erreur){
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifieDate(champ){
	//Source : https://codes-sources.commentcamarche.net/source/15737-verifier-une-date
	function isDate(d) {
	// Cette fonction permet de vérifier la validité d'une date au format jj-mm-aa ou jj-mm-aaaa
	// Par Romuald
	
	if (d == "") // si la variable est vide on retourne faux
		return false;
	
	e = new RegExp("^[0-9]{1,2}\-[0-9]{1,2}\-([0-9]{2}|[0-9]{4})$");
	
	if (!e.test(d)) // On teste l'expression régulière pour valider la forme de la date
		return false; // Si pas bon, retourne faux

	// On sépare la date en 3 variables pour vérification, parseInt() converti du texte en entier
	j = parseInt(d.split("-")[0], 10); // jour
	m = parseInt(d.split("-")[1], 10); // mois
	a = parseInt(d.split("-")[2], 10); // année

	// Si l'année n'est composée que de 2 chiffres on complète automatiquement
	if (a < 1000) {
		if (a < 89)	a+=2000; // Si a < 89 alors on ajoute 2000 sinon on ajoute 1900
		else a+=1900;
	}

	// Définition du dernier jour de février
	// Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
	if (a%4 == 0 && a%100 !=0 || a%400 == 0) fev = 29;
	else fev = 28;

	// Nombre de jours pour chaque mois
	nbJours = new Array(31,fev,31,30,31,30,31,31,30,31,30,31);

	// Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
	return ( m >= 1 && m <=12 && j >= 1 && j <= nbJours[m-1] );
	}
	if(!isDate(champ.value)){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
}


function verifieMouvement(champ){
	var regex = /[a-zA-Z]/
	if(!regex.test(champ.value)){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
}


function verifiePseudo(champ){
	var regex = /[a-zA-Z0-9]/
	if(!regex.test(champ.value)){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
}

function verifForm(f){
   var dateOk = verifieDate(f.champ2);
   var date2Ok = verifieDate(f.champ3);
   if(!dateOk||!date2Ok){
	  alert("Date(s) incorrecte(s)");
	  return false;
   }
   if(dateOk && date2Ok) {
      return true;
	} else {
		alert("Veuillez remplir correctement tous les champs");
		return false;
   }
}
