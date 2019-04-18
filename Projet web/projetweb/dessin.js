//Variables globales qui simplifient le codage des dessins
var alphaDel = false;
var betaDel = false;
var gammaDel = false;
var xDel = false; 
var yDel = false;
var zDel = false;
var anglesDrawn = false;
var posistionsDrawn = false;
var moyennePos = false;
var moyenneAng = false;

//Fonction générique pour dessinner une courbe
function drawLine(ctx, array, c){
    ctx.beginPath();
    ctx.strokeStyle = c;
    for(var i = 0; i<array.length; i++){
        ctx.lineTo(i, array[i]);
        ctx.moveTo(i, array[i]);
    }
    ctx.stroke();
}

//Fonction de dessin générique, pour les utiliser pour chaque donnée
function dessinGenerique3Courbes(array, ctx, c1, c2, c3, b1, b2, b3){

    var tab1 = [];
    var tab2 = [];
    var tab3 = [];
    ctx.save();
    drawEchelle(ctx);
    for(var i = 0; i<array.length; i+=3){
        tab1.push(array[i]);
        tab2.push(array[i+1]);
        tab3.push(array[i+2]);
    }
    ctx.scale(2,1);
    ctx.translate(0, 250);
    ctx.moveTo(0, 250);
    //Change les couleurs si les lignes ont été éffacées
    if(b1){c1 = 'white'}
    if(b2){c2 = 'white'}
    if(b3){c3 = 'white'}

    if(b1 && b2){
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab3, c3);
        ctx.restore();
      //  console.log("alpha beta");
    }else if(b1 && b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        //console.log("alpha gamma");
        ctx.restore();
    }  else if(b2 && b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab1, c1);
        ctx.restore();
        //console.log("beta gamma");
    }  else if(b1){
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab3, c3);
        //console.log("alpha");
        ctx.restore();
    }else if(b2){
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab3, c3);
        //console.log("beta");
        ctx.restore();
    }else if(b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        //console.log("gamma");
        ctx.restore();
    } else {
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab3, c3);
        ctx.restore();
    } 
}

//Fonction de dessin générique pour les données doubles
function dessinGenerique3CourbesDouble(array, array2, ctx, c1, c2, c3, c4, c5, c6, b1, b2, b3){

    var tab1 = [];
    var tab2 = [];
    var tab3 = [];
    var tab4 = [];
    var tab5 = [];
    var tab6 = [];
    ctx.save();
    drawEchelle(ctx);
    for(var i = 0; i<array.length; i+=3){
        tab1.push(array[i]);
        tab2.push(array[i+1]);
        tab3.push(array[i+2]);
    }
    for(var i = 0; i<array2.length; i+=3){
        tab4.push(array2[i]);
        tab5.push(array2[i+1]);
        tab6.push(array2[i+2]);
    }
    ctx.scale(2,1);
    ctx.translate(0, 250);
    ctx.moveTo(0, 250);
    //Change les couleurs si les lignes ont été éffacées
    if(b1){
        c1 = 'white';
        c4 = 'white';
    }
    if(b2){
        c2 = 'white';
        c5 = 'white';
    }
    if(b3){
        c3 = 'white';
        c6 = 'white';
    }

    if(b1 && b2){
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        ctx.restore();
      // console.log("alpha beta");
    }else if(b1 && b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        //console.log("alpha gamma");
        ctx.restore();
    }  else if(b2 && b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        ctx.restore();
        //console.log("beta gamma");
    }  else if(b1){
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        //console.log("alpha");
        ctx.restore();
    }else if(b2){
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        //console.log("beta");
        ctx.restore();
    }else if(b3){
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab6, c6);
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab5, c5);
        //console.log("gamma");
        ctx.restore();
    } else {
        drawLine(ctx, tab1, c1);
        drawLine(ctx, tab2, c2);
        drawLine(ctx, tab3, c3);
        drawLine(ctx, tab4, c4);
        drawLine(ctx, tab5, c5);
        drawLine(ctx, tab6, c6);
        ctx.restore();
    } 
}

//Fonction de dessin générique, pour dessinner les moyennes des données 
function dessinGeneriqueMoyenne3Courbes(array, ctx, c){
    var tab1 = [];
    var tab2 = [];
    var tab3 = [];
    var moyenne = [];

    for(var i = 0; i<array.length; i+=3){
        tab1.push(array[i]);
        tab2.push(array[i+1]);
        tab3.push(array[i+2]);
    }

    for(var i = 0; i<tab1.length; i++){
        moyenne.push((tab1[i]+tab2[i]+tab3[i])/3);
    }

    ctx.save();

    ctx.scale(2,1);
    ctx.translate(0, 250);
    ctx.moveTo(0, 250);

    ctx.beginPath();
    ctx.strokeStyle = c;
    for(var i = 0; i<moyenne.length; i++){
        ctx.lineTo(i, moyenne[i]);
        ctx.moveTo(i, moyenne[i]);
    }
    ctx.stroke(); 
    ctx.restore();
}

//Fonctions pour effectuer les dessins dans les canvas correspondants, que ce soit les 3 axes à part ou réuinis
function dessinDansCanvasAngles(data){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   

    alphaDel = false;
    betaDel = false;
    gammaDel = false;
    anglesDrawn = true;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);

    dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green');
}

function fusion3AxesAngles(data){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   
    drawEchelle(ctx);
    if(!moyenneAng){
        moyenneAng = true;
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, 'FF00FF');
    } else {
        alert("Impossible de dessinner une courbe désinnée");
    }
}

function dessinDansCanvasPositions(data){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");   

    xDel = false;
    yDel = false;
    zDel = false;
    posistionsDrawn = true;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);

    dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green');
}

function fusion3AxesPositions(data){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d"); 
    drawEchelle(ctx);  
    if(!moyennePos){
        moyennePos = true;
        dessinGenerique3Courbes(data["positions"], ctx, 'FF00FF');
    } else {
        alert("Impossible de dessinner une courbe désinnée");
    }
}

//Fonctions pour effacer dans les canvas. 
//Fonctions pour nettoyer le canvas en entier
function effacerAngles(){
    var positions = document.getElementById("angles");
    var ctx = positions.getContext("2d");   
    anglesDrawn = false;
    alphaDel = true;
    betaDel = true;
    gammaDel = true;
    moyenneAng = false;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);
}

function effacerPositions(){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");   
    posistionsDrawn = false;
    xDel = true;
    yDel = true;
    zDel = true;
    moyennePos = false;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);
}

//Fonctions pour effacer des courbes spécifiques
function effacerAngle(data, arg){
    var positions = document.getElementById("angles");
    var ctx = positions.getContext("2d"); 
    if(anglesDrawn){
        if(arg == 1 && !alphaDel){
            alphaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'white', 'red', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 1 && alphaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3Courbes(data["angles"], ctx, 'white', 'red', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !betaDel){
            betaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'white', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 2 && betaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'white', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && !gammaDel){
            gammaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'white', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && gammaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'white', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }
    } else {
        alert("Impossible d'effacer si rien n'a été déssinné !");
    }
    if(moyenneAng){
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
    }
}

function effacerPosition(data, arg){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
    if(posistionsDrawn){
        ctx.clearRect(0,0,1000, 500);
        if(arg == 1 && !xDel){
            xDel = true;
            dessinGenerique3Courbes(data["positions"], ctx, 'white', 'red', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 1 && xDel){
            alert("Impossible d'effacer si la courbe a déjà été effacée !");
            dessinGenerique3Courbes(data["positions"], ctx, 'white', 'red', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !yDel){
            yDel = true;
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'white', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && yDel){
            alert("Impossible d'effacer si la courbe a déjà été effacée !");
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'white', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && !zDel){
            zDel = true;
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'white', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && zDel){
            alert("Impossible d'effacer si la courbe a déjà été effacée !");
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'white', xDel, yDel, zDel);
            drawEchelle(ctx);
        }
    }else {
        alert("Impossible d'effacer si rien n'a été déssinné !");
    } if(moyennePos){
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "FF00FF");
    }
}

//Fonctions de redessinnage de courbes déjà effacées
function redessinnerPosition(data, arg){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
    if(posistionsDrawn){
        ctx.clearRect(0,0,1000, 500);
        if(arg == 1 && xDel){
            xDel = false;
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 1 && !xDel){
            if(posistionsDrawnsDrawn){
                dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }            
            drawEchelle(ctx);
        }else if(arg == 2 && yDel){
            yDel = false;
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !yDel){
            if(posistionsDrawnsDrawn){
                dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }                drawEchelle(ctx);
        } else if(arg == 3 && zDel){
            zDel = false;
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && !zDel){
            if(posistionsDrawnsDrawn){
                dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }                drawEchelle(ctx);
        }
    }
}

function redessinnerAngle(data, arg){
    var positions = document.getElementById("angles");
    var ctx = positions.getContext("2d"); 
        if(arg == 1 && alphaDel){
            alphaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 1 && !alphaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }
            drawEchelle(ctx);
        }else if(arg == 2 && betaDel){
            betaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 2 && !betaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }            drawEchelle(ctx);
        }else if(arg == 3 && gammaDel){
            gammaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && !gammaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }            drawEchelle(ctx);
        }
}

//Effacer les coubres des moyennes
function effacerMoyenneAngles(data){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   
    if(moyenneAng){
        moyenneAng = false;
        ctx.clearRect(0,0, 1000, 500);
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, 'white');
        if(!anglesDrawn){
            //On ne fait rien si les angles n'étaient pas déssinés
        } else {
            dessinGenerique3Courbes(data["angles"], ctx, "blue", "red", "green", alphaDel, betaDel, gammaDel);
        }
        drawEchelle(ctx);
    } else {
        alert("ipossible d'effacer une courbe inexsitante ");
    }
}

function effacerMoyennePositions(data){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");   
    if(moyennePos){
        moyennePos = false;
        ctx.clearRect(0,0, 1000, 500);
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, 'white');
        if(!positionsDrawn){
            //On ne fait rien si les angles n'étaient pas déssinés
        } else {
            dessinGenerique3Courbes(data["positions"], ctx, "blue", "red", "green", xDel, yDel, zDel);
        }
        drawEchelle(ctx);
    } else {
        alert("ipossible d'effacer une courbe inexsitante ");
    }
}

//Redesinner les courbes des moyennes
function redessinnerMoyennesAngles(data){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");
    ctx.clearRect(0,0,1000, 500);
    if(!moyenneAng){
        moyenneAng = true;
       if(anglesDrawn){
            //Si les angles ont été déssinnés
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
        }
        dessinGeneriqueMoyenne3Courbes(data['angles'], ctx, "FF00FF");
        drawEchelle(ctx);
    } else {
        alert("Impossible de redésinner car déjà désinnée");
    }
}

function redessinnerMoyennesPositions(data){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
    ctx.clearRect(0,0,1000, 500);
    if(!moyennePos){
        moyennePos = true;
       if(positionsDrawn){
            //Si les angles ont été déssinnés
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', xDel, yDel, zDel);
        }
        dessinGeneriqueMoyenne3Courbes(data['positions'], ctx, "FF00FF");
        drawEchelle(ctx);
    } else {
        alert("Impossible de redésinner car déjà désinnée");
    }
}

//Fonction de dessin de l'échelle WIP
function drawEchelle(ctx){
    ctx.save();
    ctx.scale(2,1);
    ctx.translate(0, 250);
    ctx.moveTo(0, 250);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    for(var i = 0; i<1000; i++){
        ctx.lineTo(i, 0);
        ctx.moveTo(i, 0);
    }
    ctx.stroke();
    ctx.restore();
}

//Fonctions de dessin quand on dispose de données doubles
function dessinDansCanvasAnglesDouble(data, data2){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   

    alphaDel = false;
    betaDel = false;
    gammaDel = false;
    anglesDrawn = true;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);

    dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green');
    dessinGenerique3Courbes(data2["angles"], ctx, 'violet', 'yellow', 'cian');
    if(moyenneAng){
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    }
}

function fusion3AxesAnglesDouble(data, data2){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   
    if(!moyenneAng){
        moyenneAng = true;
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    } else {
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    }
    drawEchelle(ctx);
}

function dessinDansCanvasPositionsDouble(data, data2){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");   

    xDel = false;
    yDel = false;
    zDel = false;
    positionsDrawn = true;
    ctx.clearRect(0,0,1000, 500);
    drawEchelle(ctx);

    dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green');
    dessinGenerique3Courbes(data2["positions"], ctx, 'violet', 'yellow', 'cian');
    if(moyennePos){
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["positions"], ctx, "FF00FF");
    }
}

function fusion3AxesPositionsDouble(data, data2){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   
    moyenneAng = true;
    dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
    dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    drawEchelle(ctx);
}

function effacerAngle2(data, data2, arg){
    var positions = document.getElementById("angles");
    var ctx = positions.getContext("2d"); 
    if(anglesDrawn){
        if(arg == 1 && !alphaDel){
            alphaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'white', 'red', 'green', 'white', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 1 && alphaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'white', 'red', 'green', 'white', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !betaDel){
            betaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'white', 'green', 'violet', 'white', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 2 && betaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'white', 'green', 'violet', 'white', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && !gammaDel){
            gammaDel = true;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && gammaDel){
            ctx.clearRect(0,0,1000, 500);
            alert("Impossible d'effacer si la courbe a déjà été effacée !"); 
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }
    } else {
        alert("Impossible d'effacer si rien n'a été déssinné !");
    }
    if(moyenneAng){
        fusion3AxesAnglesDouble(data, data2);
    }
}

function effacerPosition2(data, data2, arg){   
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
        ctx.clearRect(0,0,1000, 500);
        if(arg == 1 && !xDel){
            xDel = true;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'white', 'red', 'green', 'white', 'yellow', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 1 && xDel){
            alert("Impossible d'effacer si la courbe a déjà été effacée !");
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'white', 'red', 'green', 'white', 'yellow', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !yDel){
            yDel = true;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'white', 'green', 'violet', 'white', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && yDel){
            alert("Impossible d'effacer si la courbe a déjà été effacée !");
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'white', 'green', 'violet', 'white', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && !zDel){
            zDel = true;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && zDel){
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', xDel, yDel, zDel);           
            drawEchelle(ctx);
     }
     if(moyennePos){
        fusion3AxesPositionsDouble(data, data2);
    }
}

function redessinnerAngle2(data, data2, arg){
    var positions = document.getElementById("angles");
    var ctx = positions.getContext("2d"); 
        if(arg == 1 && alphaDel){
            alphaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 1 && !alphaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
                 } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }              drawEchelle(ctx);
        }else if(arg == 2 && betaDel){
            betaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        } else if(arg == 2 && !betaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
                 } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }              drawEchelle(ctx);
        }else if(arg == 3 && gammaDel){
            gammaDel = false;
            ctx.clearRect(0,0,1000, 500);
            dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
            drawEchelle(ctx);
        }else if(arg == 3 && !gammaDel){
            ctx.clearRect(0,0,1000, 500);
            if(anglesDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["angles"], data2["angles"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
                 } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }              
            drawEchelle(ctx);
        }
        if(moyenneAng){
          dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
            dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
        }
}

function redessinnerPosition2(data, data2, arg){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
        ctx.clearRect(0,0,1000, 500);
        if(arg == 1 && xDel){
            xDel = false;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 1 && !xDel){
            if(posistionsDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }              drawEchelle(ctx);
        }else if(arg == 2 && yDel){
            yDel = false;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        }else if(arg == 2 && !yDel){
            if(posistionsDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }              drawEchelle(ctx);
        } else if(arg == 3 && zDel){
            zDel = false;
            dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'green', 'violet', 'yellow', 'cian', xDel, yDel, zDel);
            drawEchelle(ctx);
        } else if(arg == 3 && !zDel){
            if(posistionsDrawn){
                alert("Impossible de redessinner si la courbe est déjà déssinée");
                dessinGenerique3CourbesDouble(data["positions"], data2["positions"], ctx, 'blue', 'red', 'white', 'violet', 'yellow', 'white', xDel, yDel, zDel);
            } else {
                    alert("Impossible de redessinner si rien n'a été éffacé !");
                }  
            drawEchelle(ctx);
        }
        if(moyennePos){
            dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "FF00FF");
              dessinGeneriqueMoyenne3Courbes(data2["positions"], ctx, "FF00FF");
          }
}

function redessinnerMoyennesPositionsDouble(data, data2){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
    ctx.clearRect(0,0,1000, 500);
    if(!moyennePos){
        moyennePos = true;
        if(positionsDrawn){
            //Si les positions ont été déssinnés
            dessinGenerique3Courbes(data["positions"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            dessinGenerique3Courbes(data2["position"], ctx, 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
        }
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["position"], ctx, "FF00FF");
    } else {
        alert("Impossible de dessinner une courbe désinnée");
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["position"], ctx, "FF00FF");
    }
    drawEchelle(ctx);
}

function redessinnerMoyennesAnglesDouble(data, data2){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");
    ctx.clearRect(0,0,1000, 500);
    if(!moyenneAng){
        moyenneAng = true;
        if(anglesDrawn){
            //Si les angles ont été déssinnés
            dessinGenerique3Courbes(data["angles"], ctx, 'blue', 'red', 'green', alphaDel, betaDel, gammaDel);
            dessinGenerique3Courbes(data2["angles"], ctx, 'violet', 'yellow', 'cian', alphaDel, betaDel, gammaDel);
        }
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    } else {
        alert("Impossible d'effacer une courbe effacée");
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "FF00FF");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "FF00FF");
    }
    drawEchelle(ctx);
}

function effacerMoyennePositionsDouble(data, data2){
    var positions = document.getElementById("positions");
    var ctx = positions.getContext("2d");
    ctx.clearRect(0, 0, 1000, 500);
    if(moyennePos){
        moyennePos = false;
        dessinGeneriqueMoyenne3Courbes(data["positions"], ctx, "white");
        dessinGeneriqueMoyenne3Courbes(data2["positions"], ctx, "white");
        if(positionsDrawn){
            dessinDansCanvasPositionsDouble(data, data2);
        }
    } else {
        alert("Impossible d'effacer une courbe effacée");
    }
    drawEchelle(ctx);
}

function effacerMoyenneAnglesDouble(data, data2){
    var angles = document.getElementById("angles");
    var ctx = angles.getContext("2d");   
    ctx.clearRect(0, 0, 1000, 500);
    if(moyenneAng){
        moyenneAng = false;
        dessinGeneriqueMoyenne3Courbes(data["angles"], ctx, "white");
        dessinGeneriqueMoyenne3Courbes(data2["angles"], ctx, "white");
        if(anglesDrawn){
            dessinDansCanvasAnglesDouble(data, data2);
        }
    } else {
        alert("Impossible d'effacer une courbe effacée");
    }
    drawEchelle(ctx);
}