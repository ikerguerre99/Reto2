var modalHeaderHTML = "<div class='row justify-content-center'>" +
                      "<div class='col-6'>" +                            
                      "<img src='img/logo.png' id='imgModal'>" +
                      "</div>" +
                      "</div>";

var modalBodyHTML ='<form>'+
    '<div class="form-group">' +
    '<label for="exampleInputEmail1">Correo electronico:</label>' +
    '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">' +
  '</div>' +
  '<div class="form-group">' +
    '<label for="exampleInputPassword1">Contraseña:</label>'+
    '<input type="password" class="form-control" id="exampleInputPassword1">'+
  '</div>'+
  '<button type="submit" class="btn btn-primary">Submit</button>'+
'</form>';

document.querySelector(".modal-header").innerHTML=modalHeaderHTML;
document.querySelector(".modal-body").innerHTML=modalBodyHTML;

