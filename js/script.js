//On a un élément qui varie dans l'application. C'est le compteur 
//On a crée donc une variable qui contient cette valeur
//Au demarage ell vaut zero
let count = 0;

/**
 * on declare nos fonctions
 * mais elle ne seront pas executées que si on les apelles
 * avec par exemple doDecrease() ou avec un écouteur d'evenemment (addEventListener)
 */
function changeColor() {
    if (count < 0) {
        document.getElementById("val").style.color = "red";   
    } else if (count > 0) {
        document.getElementById("val").style.color = "green";
    } else {
            document.getElementById("val").style.color = "black";
        }
}



function doDecrease() {
   count = count - 1;
   changeColor();
   document.getElementById("val").innerHTML = count; //changer le contenu de la nu=ouvel valeur de val en html   
}

function doReset () {
    count= 0;
    changeColor();
    document.getElementById("val").innerHTML = count;
}

function doIncrease() {
    count = count + 1;
    changeColor();
   document.getElementById("val").innerHTML = count;
}
//on recupere l'id decrease et on l'ajoute un déclencheur d'evenemment c'est à dire addEventListener
document.getElementById("decrease").addEventListener("click", doDecrease); //attacher un déclancheur d'evenemen
document.getElementById("reset").addEventListener("click", doReset)
document.getElementById("increase").addEventListener("click", doIncrease)


