function validarUser(){
    var usuario = $("#txtusuario").val();

    $.ajax({
        url: 'usuario.php',
        type: 'post',
        data: {'usuario':usuario},
        success: function( data ){
        	if (data > 0){
                $("#divcontrasena").show();
                $("#divuser").hide();
                $("#lblusuario").html('<h5><font color="navy">Usuario: '+usuario+'</font></h5>');
            }else{
                alert("El Usuario no existe");
            }
        },
        error: function( jqXhr, textStatus, error ){
            console.log( error );
        }
    });
}

function retroceder(){
    location.reload();
}

function login(){
    var usuario = $("#txtusuario").val();
    var contrasena = $("#txtpassw").val();

    $.ajax({
        url: 'login.php',
        type: 'post',
        data: {'usuario':usuario, 'contrasena':contrasena},
        success: function( data ){
            if (data==1){
                alert('Bienvenido '+ usuario);
                window.location="index.html";
            }else{
                alert('Password incorrecto');
            }
        },
        error: function( jqXhr, textStatus, error ){
            console.log( error );
        }
    });
}