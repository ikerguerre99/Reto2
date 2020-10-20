var visibilidad = Array(3);

visibilidad[0] = false;
visibilidad[1] = false;
visibilidad[2] = false;


function modalCreate() {
    var modalHeaderHTML = "<div class='row'>" +
        "<div class='col-3 offset-7'>" +
        "<img src='img/logo.png' id='imgModal'>" +
        "</div>" +
        "</div>";

    var modalBodyHTML = '<form>' +
        '<div class="form-group">' +
        '<label for="exampleInputEmail1">Correo electronico:</label>' +
        '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="exampleInputPassword1">Contraseña:</label>' +
        '<input type="password" class="form-control" id="exampleInputPassword1">' +
        '</div>' +
        '<button type="submit" class="btn btn-primary">Submit</button>' +
        '</form>';

    document.querySelector(".modal-header").innerHTML = modalHeaderHTML;
    document.querySelector(".modal-body").innerHTML = modalBodyHTML;
}



function mostrarInfo(num) {
    console.log(num);

    if (visibilidad[num] == false) {
        console.log("visible");
        document.getElementById("centered" + num).style.visibility = "visible";
        document.getElementById("imagen" + num).style.opacity = "0.2";
        visibilidad[num] = true;
    }
    else {
        console.log("no visible");
        document.getElementById("centered" + num).style.visibility = "hidden";
        document.getElementById("imagen" + num).style.opacity = "1"

        visibilidad[num] = false;
    }
}

function cerrarBoton() {
    document.getElementById("alerta").style.visibility = "hidden"
}


/*Select ciudades*/
var paises = ["Pais...", "España", "Francia", "Islandia", "Países_Bajos"];

var ciudades = new Array(4);

ciudades[0] = ["Ciudades..."];
ciudades[1] = ["Ciudades...", "Bilbao", "Barcelona", "Madrid"];
ciudades[2] = ["Ciudades...", "París", "Niza", "Burdeos"];
ciudades[3] = ["Ciudades...", "Reikiavik", "Akureyri", "Akranes"];
ciudades[4] = ["Ciudades...", "Ámsterdam", "La Haya", "Maastricht"];

var informacion = new Array(4);

//Informacion de Bilbao
informacion[0] = Array(3);
informacion[0][0] = ["Bilbao0.jpg", "MUSEO GUGGENHEIM", "Convertido en símbolo del nuevo Bilbao, el Museo Guggenheim Bilbao constituye uno de los proyectos culturales más ambiciosos del siglo XX. La colección permanente del museo incluye fundamentalmente obras de los artistas más prominentes de las últimas cuatro décadas y se complementa con fondos prestados por la Solomon R. Guggenheim Foundation y con las programaciones especiales que auspicia la Fundación."];
informacion[0][1] = ["Bilbao1.jpg", "SAN MAMÉS", "San Mamés es un estadio de fútbol ubicado en Bilbao (Vizcaya, España). Fue inaugurado en su primera fase de construcción el 16 de septiembre de 2013 y es el sucesor del antiguo San Mamés. Es utilizado principalmente por el Athletic Club para la práctica del fútbol, si bien tiene otros usos complementarios entre los que se incluye un centro de innovación deportiva y otro de medicina deportiva, una pista de atletismo subterránea y un polideportivo municipal. Además, es utilizado como recinto para conciertos de gran envergadura, al igual que su antecesor."];
informacion[0][2] = ["Bilbao2.jpg", "TEATRO ARRIAGA", "El Teatro Arriaga es un teatro de Bilbao, capital de Vizcaya, en el País Vasco (España). Es un edificio neobarroco de finales del siglo XIX, obra del arquitecto Joaquín de Rucoba y dedicado al compositor bilbaíno Juan Crisóstomo de Arriaga, a quien se le ha denominado el 'Mozart español'. Fue inaugurado el 31 de mayo de 1890. Es uno de los principales teatros bilbaínos y también de los edificios más notables de la villa. Ha sufrido diferentes avatares que han obligado a su reconstrucción y reforma, desde el incendio de 1914 hasta las inundaciones de 1983."];

//Informacion de París
informacion[1] = Array(3);
informacion[1][0] = ["Paris1.jpg", "TORRE EIFFEL", "La torre Eiffel​, inicialmente llamada tour de 300 mètres, es una estructura de hierro pudelado diseñada por los ingenieros Maurice Koechlin y Émile Nouguier, dotada de su aspecto definitivo por el arquitecto Stephen Sauvestre y construida por el ingeniero francés Alexandre Gustave Eiffel y sus colaboradores para la Exposición Universal de 1889 en París.​Situada en el extremo del Campo de Marte a la orilla del río Sena, este monumento parisino, símbolo de Francia y de su capital, es la estructura más alta de la ciudad y el monumento que cobra entrada más visitado del mundo, con 7,1 millones de turistas cada año.​ Con una altura de 300 metros, prolongada más tarde con una antena hasta los 324 metros, la torre Eiffel fue la estructura más elevada del mundo durante 41 años.​"];
informacion[1][1] = ["Paris2.jpg", "MUSEO DEL LOUVRE", "El Museo del Louvre es el museo nacional de Francia consagrado al tanto bellas artes como arqueología y artes decorativas anteriores al Impresionismo. Está ubicado en París, la capital del país, en el antiguo palacio real del Louvre. Sus extensas colecciones son el resultado del coleccionismo desarrollado por la monarquía francesa a lo largo de varios siglos, al que se sumó el esfuerzo de varias personalidades de La Ilustración, la labor desamortizadora de la Revolución francesa, las victorias militares durante las guerras napoleónicas, y las campañas arqueológicas y compras impulsadas durante el siglo XIX."];
informacion[1][2] = ["Paris3.jpg", "CATEDRAL DE NOTRE DAME", "La catedral de Notre Dame es una catedral de culto católico, sede de la archidiócesis de París, la capital de Francia. Dedicada a la Virgen María, madre de Jesucristo, se sitúa en la pequeña isla de la Cité, rodeada por las aguas del río Sena. Es uno de los monumentos más populares de la capital francesa. Se trata de uno de los edificios más señeros y antiguos de cuantos se construyeron en estilo gótico. El uso innovador de la bóveda de crucería y del arbotante, los enormes y coloridos rosetones y el naturalismo y la abundancia de decoración escultórica lo diferencian de la arquitectura románica."];

//Informacion de Reikiavik
informacion[2] = Array(3);
informacion[2][0] = ["Reikiavik1.jpg", "HALLGRIMSKIRKJA", "La Hallgrímskirkja es una iglesia de rito luterano situada en Reikiavik, capital de Islandia. Es frecuentemente definida como la 'Catedral de Reikiavik', debido a su tamaño y apariencia, pero en realidad no es una catedral sino una iglesia. En Reikiavik hay dos catedrales: la Catedral de Reikiavik propiamente dicha y la Catedral de Cristo Rey."];
informacion[2][1] = ["Reikiavik2.png", "HARPA", "El edificio Harpa es un centro de conciertos y conferencias de Reikiavik, la capital de Islandia, en el distrito occidental de Miðborg. En su diseño participaron el estudio de arquitectura Henning Larsen, el artista Olafur Eliasson y Artec Consultants Inc. Está ubicado frente al mar. Por la crisis de 2008 y 2009 el proyecto se detuvo temporalmente. El edificio se inauguró en 2011. En 2013 recibió el Premio Mies van der Rohe.​ Es la sede de la Orquesta Sinfónica de Islandia y de la Ópera Islandesa."];
informacion[2][2] = ["Reikiavik3.jpg", "GROTTA ISLAND LIGHTHOUSE", "Faro destacado para ver la aurora boreal. Aurora polar es un fenómeno en forma de brillo o luminiscencia que se presenta en el cielo nocturno, generalmente en zonas polares, aunque puede aparecer en otras zonas del mundo durante breves períodos."];

//Informacion de Amsterdam
informacion[3] = Array(3);
informacion[3][0] = ["Amsterdam1.jpg", "RIJKSMUSEUM", "El Rijksmuseum o Museo Nacional de Ámsterdam se encuentra ubicado en Ámsterdam, Países Bajos. Está dedicado al arte, la artesanía y la historia. Posee la más famosa colección de pinturas del Siglo de Oro neerlandés así como una rica colección de arte asiático y egipcio."];
informacion[3][1] = ["Amsterdam2.jpg", "PALACIO REAL DE AMSTERDAM", "El Palacio Real de Ámsterdam es uno de los cuatro palacios en los Países Bajos, que está a disposición del monarca de los Países Bajos por ley del Parlamento. El palacio, con un estilo arquitectónico clasicista, fue construido como ayuntamiento de la ciudad durante la Edad de Oro neerlandesa en el siglo XVII. El edificio se convirtió en el palacio real del rey Luis Napoleón y más tarde de la Casa Real neerlandesa."];
informacion[3][2] = ["Amsterdam3.jpg", "OUDE KERK", "La Oude Kerk es el edificio más antiguo de Ámsterdam y su iglesia parroquial más antigua, consagrada en 1306 por el obispo de Utrecht con san Nicolás como su santo patrono. Luego de la Reforma en 1578, se transformó en una iglesia calvinista, lo que continúa siendo hasta nuestros días. Se encuentra ubicada en De Wallen, en la actualidad la principal zona roja de Ámsterdam. La plaza que rodea la iglesia es la Oudekerksplein."];

document.addEventListener("DOMContentLoaded", cargarPaises); // cuando se carga la pagina, se carga el primer select con los paises

function cargarPaises() {
    var html = "";
    for (let i = 0; i < paises.length; i++) {
        html += "<option>" + paises[i] + "</option>";
    }
    document.getElementById('inputPais').innerHTML = html;
}

function cargar(id) { //al elegir el pais nos salen algunas ciudades en el segundo select
    var html = "";

    var index = document.getElementById('inputPais').selectedIndex; // posicion del pais que hemos elegido, para buscar el pais en el array paises

    for (let i = 0; i < ciudades[index].length; i++) {
        html += "<option>" + ciudades[index][i] + "</option>";
    }
    document.getElementById(id).innerHTML = html;
}

function sacarCards(idCiudad, idPais, idCards) {
    var indexCiudad = document.getElementById(idCiudad).selectedIndex;
    if (indexCiudad == 1) {//si la ciudad seleccionada es la primera, sacar cards sino no hace nada
        var indexPais = document.getElementById(idPais).selectedIndex - 1;
        var html = '';
        for (let i = 0; i < informacion[indexPais].length; i++) {
            html += '<div class="card" style="width: 28rem;">';
            html += '<img class="card-img-top" src="img/' + informacion[indexPais][i][0] + '">';
            html += '<div class="card-body">';
            html += '<h4>' + informacion[indexPais][i][1] + '</h4>';
            html += '<p class="card-text">' + informacion[indexPais][i][2] + '</p>';
            html += '</div>';
            html += '</div>';
        }
        document.getElementById(idCards).innerHTML = html;
    }
}
