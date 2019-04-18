var estArrettee = false;
var aEtePressee = false;
var window;
var positions = [];
var angles = [];
var coordonnees = [];
var today = new Date();
var secondes = 0;
var obj = {date: today.getDate()};


function motion(event){
	var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
	document.getElementById("coords").innerHTML = "<ul><li>Mouvements sur x : " + x +"</li><li>Mouvements sur y : " + y + "</li><li>Mouvements sur z : "+ z +"</li></ul>";
	positions.push(x,y,z);
}

function fangles(event){
	var alpha = event.alpha;
	var beta = event.beta;
	var gamma = event.gamma;
	document.getElementById("angles").innerHTML = "<ul><li>Mouvements sur alpha : " + alpha +"</li><li>Mouvements sur beta : " + beta + "</li><li>Mouvements sur gamma : "+ gamma +"</li></ul>";
	angles.push(alpha, beta, gamma);
}

function lancerEnregistrement(){
	var timeleft = 3;
	var downloadTimer = setInterval(function(){
		  document.getElementById("COMPTEURS").innerHTML = timeleft;
		  --timeleft;
		  console.log(timeleft);
  		if(timeleft <= 0){
			clearInterval(downloadTimer);
			console.log("GO");
			document.getElementById("COMPTEURS").innerHTML = "";
			captureMouvements();
		  }
	},1000);
}

function captureMouvements(){
	var n = document.getElementById("pseudo").value;
	var select = document.getElementById("mvt");
    var m = select.options[select.selectedIndex].value;
	obj.nom = n;
	obj.mvt = m;
	document.getElementById('arret').disabled = false; 
	document.getElementById('capture').disabled = true; 
	if(window.DeviceMotionEvent){
		document.getElementById("enCours").innerHTML = "Enregistrement en cours";
		window.addEventListener ("devicemotion", motion, false);
	 } else {
		 alert("DeviceMotionEvent is not supported");
	 }
	 
	 if(window.DeviceOrientationEvent){
		 	window.addEventListener ("deviceorientation", fangles, false);
	 } else {
		 alert("DeviceOrientationEvent is not supported");
		 document.getElementById("angles").innerHTML="DeviceOrientationEvent is not supported";
	 }
}

//Désactive la capture de mouvements
function stop(){
	document.getElementById("enCours").innerHTML = "Enregistrement terminé";
	var FIN = "fin";
	var end = new Date();
	var secs2 = end.getSeconds();
	console.log(secs2);
	var duree = secs2-secondes;
	estArrettee = true;
	window.removeEventListener("devicemotion", motion, false);
	window.removeEventListener("deviceorientation", fangles, false);
	for(var i = 0; i < positions.length; i++){
		coordonnees[i] = [positions[i], angles[i]];
	}
	obj.pos = JSON.stringify(positions);
	obj.ang = JSON.stringify(angles);
	obj.d = JSON.stringify(duree);
	console.log(obj);
	document.getElementById("coords").innerHTML = "<ul><li>Mouvements sur x:" + FIN +"</li><li>Mouvements sur y " + FIN  + "</li><li>Mouvements sur z "+ FIN  +"</li></ul>";
	document.getElementById("angles").innerHTML = "<ul><li>Mouvements sur alpha:" + FIN  +"</li><li>Mouvements sur beta " + FIN  + "</li><li>Mouvements sur gamma "+ FIN  +"</li></ul>";
	document.getElementById("COMPTEURS").innerHTML ="FIN";
   
    $.ajax({
       url: "enregistrements.php",
       type: "post",
       data: obj,
       success: function (response) {
          //PHP va répondre en cas de succès de l'envoi des données  
          console.log("ca marche "+ response);             
       },
       error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
       }
    });
	JSON.stringify(obj);
	console.log(JSON.stringify(obj));
	document.getElementById('capture').disabled = false; 
	document.getElementById('arret').disabled = true; 
}
