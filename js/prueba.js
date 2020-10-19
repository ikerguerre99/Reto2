var visibilidad= Array(3);

visibilidad[0]= false;
visibilidad[1]= false;
visibilidad[2]= false;

function mostrarInfo(num){
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