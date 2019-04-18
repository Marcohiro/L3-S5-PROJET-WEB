<?php
  if(empty($_POST["nom"]) || $_POST['nom'] == ""){
	  echo "Le nom n'a pas ete renseigne";
  }
  if(empty($_POST["mvt"])){
	echo "Le mouvement n'a pas ete renseigne";
  }
   if(empty($_POST["pos"])||empty($_POST["ang"])){
	echo "Il manque les positions";
  }
  if(empty($_POST["d"])){
	echo "Il manque la duree";
  } else if($_POST["d"] <= 0){
    echo "Duree du mouvement négative ou nulle. Impossible d'enregistrer le geste";
  }
  echo 'Fonctionnne';
  
  $name = "DATAS/";
  $name.=$_POST["nom"];
  $name.= " ";
  $name.=$_POST["mvt"];
  $name.=" ";
  $name.=$_POST["d"];
  $name.=".JSON";

  //$file = fopen("DATAS/$name", "w") or die("Impossible d'ouvrir ou de creer un fichier!");
 // $current = file_get_contents($file);
  //$current = "[{}]";
  $current = "";
  //$current = substr($current, 0, -1);
  //$current.= ',{"nom":"'.$_POST["nom"];
  $current.= '{"nom":"'.$_POST["nom"];
  $current.= '","mouvement":"'.$_POST["mvt"];
  $current.= '","date":     "'.date("F j, Y, g:i a");      
  $current.= '","positions":'.$_POST["pos"];
  $current.= ',"angles":'.$_POST["ang"];
  $current.= ',"duree":'.$_POST["d"]."}";
  //$current.= ',"angles":'.$_POST["ang"]."}]";
  file_put_contents($name, $current);
?>
