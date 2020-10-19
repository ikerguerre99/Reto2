var paises=["Elige...","España", "Francia", "Islandia", "Países_Bajos"];

var ciudades = new Array(4) 

ciudades[0] = ["Elige..."];
ciudades[1] = ["Elige...","Barcelona", "Madrid","Bilbao"];
ciudades[2] = ["Elige...","París", "Niza", "Burdeos"];
ciudades[3] = ["Elige...","Reikiavik","Akureyri","Akranes"];
ciudades[4] = ["Elige...","Ámsterdam","La Haya","Maastricht"];

document.addEventListener("DOMContentLoaded", cargarPaises); // cuando se carga la pagina, se carga el primer select con los paises

function cargarPaises(){
    var html="";
    for (let i = 0; i < paises.length; i++) {
        html+="<option>"+paises[i]+"</option>";
    }
    document.getElementById('inputPais').innerHTML=html;
}

function cargar(id){ //al elegir el pais nos salen algunas ciudades en el segundo select
    var html="";
    
        var index=document.getElementById('inputPais').selectedIndex; // posicion del pais que hemos elegido, para buscar el pais en el array paises

        for (let i = 0; i < ciudades[index].length; i++) {
            html+="<option>"+ciudades[index][i]+"</option>";
        }
    document.getElementById(id).innerHTML=html;
}

function cerrar(idCerrar){
    document.getElementById(idCerrar).style.display='none';
}