var visible1 = false;
var visible2 = false;
var visible3 = false;

function mostrarInfo(id){
console.log(id);
if (id == "card1") {
    num = 1;



    if (visible1 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2";
      visible1 = true;
    } 
    else {
      console.log("no visible");
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible1 = false;
    }
  }
  if (id == "card2") {
    num = 2;



    if (visible2 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2";
      visible2 = true;
    } 
    else {
      console.log("no visible");
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible2 = false;
    }
  }
  if (id == "card3") {
    num = 3;

    

    if (visible3 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2";
      visible3 = true;
    } 
    else {
      console.log("no visible");
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible3 = false;
    }
  }
}