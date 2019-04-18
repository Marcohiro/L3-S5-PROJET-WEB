function voirTab() {
   var valeur = '';
   var valeur2 = '';
   var tab =  [];
   var tab2 =  [];
   /*if(document.choixAFaire.lechoisi.value == rien && document.choixAFaire.lechoisi2.value == rien2){
	   alert("Impossible d'avoir 2 choix none");
   }*/
   for (i=0; i<document.choixAFaire.lechoisi.length; i++) {
	  tab[i] = document.choixAFaire.lechoisi[i].value;
	  if (document.choixAFaire.lechoisi[i].checked) {
	    	valeur = document.choixAFaire.lechoisi[i].value;
			valeur -= 2;
	   }
	}
	var file = document.choixAFaire.lechoisi[valeur].id;
	
	for (i=0; i<document.choixAFaire.lechoisi2.length; i++) {
		tab2[i] = document.choixAFaire.lechoisi2[i].value;
		if (document.choixAFaire.lechoisi2[i].checked) {
			  valeur2 = document.choixAFaire.lechoisi2[i].value;
			  if(i== 0){
				  valeur2=0;
			  } else {
			  	valeur2 -= 1;
			  }
		 }
	}
	if(valeur2 != 0){
		console.log(valeur2);
		var file2 = document.choixAFaire.lechoisi2[valeur2].id;
	}

	if(valeur2 != 0 && valeur != valeur2-1){
		alert("Les fichiers : " + file + ' et '  + " " + file2 + "ont été séléctionnés");
	} else {
		alert(file + ' a été sélectionné');
	}
}