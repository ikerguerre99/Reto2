document.addEventListener("DOMContentLoaded", function (event){
    returnDatos();
    correo();
    
})


function returnDatos(){
    if(correo() && clave()){
        return true;

    } else {
        return false;
    }
}

function correo(){
    if(window.document.forms.encuesta.correo.value.indexOf('@') < 0){
        alert ("correo incorrecto");
        return false;

    } else {
        return true;
    }
}