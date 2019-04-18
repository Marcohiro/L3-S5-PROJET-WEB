//Désactive le bouton d'enregistrement si le champ n'est pas renseigné
/*var elem = document.getElementById("pseudo");
console.log(elem);
if(elem == null){
  document.getElementById('capture').disabled = true;
} else {
  document.getElementById('capture').disabled = false;
  document.getElementById("msg").style.visibility = "hidden"
}*/
//On désactive le boutton si le champ 'pseudo' est vide
$(function () {
  $('#pseudo').on("input", function () {
      if ($("#pseudo").val() == '') {
          $('#capture').prop('disabled', true);
          $('#pseudo2').show();
      } else {
          $('#capture').prop('disabled', false);
          $('#pseudo2').hide();
      }
  });
});