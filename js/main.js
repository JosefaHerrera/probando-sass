//index.html validar form.
//Expresión para validar un correo electrónico expresiones regulares
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
    // al hacer click en el btn-enviar, empezará a validar el formulario
    $("#btn-enviar").click(function(){
    //.val() obtenemos el contenido ingresado en el input correo.
    var correo = $("#correo").val();
    //.val() obtenemos el contenido ingresado en el inpu nombre.
    var nombre = $("#nombre").val();
    //.val() obtenemos el contenido ingresado en el input apellido.
    var apellido = $("#apellido").val();
    //.val() obtenemos el contenido ingresado en el input nº de telefono.
    var tel = $("#tel").val();
    //al realizar variables , el codigo se ve más limpio al momento de hacer validaciones largas.
    //VALIACION (CONDICION)
    //Si nombre es = a espacio vacío , aparece el mensaje con el #mensaje1
    //fadeIn(); hace un tipo de animacion de opacidad 0% a 100%
    if(nombre == ""){
        $("#mensaje1").fadeIn("slow");
        ////al tener el valor false , es que no esta validando el contenido como lo hace true.
            return false;
        }else{
        //fadeOut(); hace un tipo de animacion de opacidad 100% a 0%
              $("#mensaje1").fadeOut();
             }if(apellido == ""){
                    $("#mensaje2").fadeIn("slow");
                    return false;
                }
                else{
                    $("#mensaje2").fadeOut();
                        if (correo == "" || !expr.test(correo)) {
                            $("#mensaje3").fadeIn("slow");
                            return false;
                        }
                        else{
                            $("#mensaje3").fadeOut();
                                $("#mensaje3").fadeOut();
                                if (tel == "") {
                                    $("#mensaje4").fadeIn("slow");
                                    return false;
                                }
                                else{
                                    $("#mensaje4").fadeOut();
                                    window.location.href = 'index2.html'
                                }
                            }
                    }
                });
            });
    
