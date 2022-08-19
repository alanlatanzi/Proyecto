let usuario = "";
let visitas = 0;
let boton_usuario = document.getElementById('usuario');

function identificarUsuario(){
    usuario = localStorage.getItem("usuario") ?? '';
    boton_usuario.innerText = "Bienvenido/a " + usuario;
    if(usuario !== ''){
        boton_usuario.setAttribute('title','');
    }
}
function contador(){
    visitas = localStorage.getItem("visitas") ?? 0;
    visitas++;
    localStorage.setItem("visitas", visitas);
    document.getElementById('visitas').innerText = "Visitas: " + visitas;
}

boton_usuario.onclick = function(){
    let nombre_apellido = "";
    do{
        nombre_apellido = prompt("Ingrese su nombre para identificarse");
    }while(nombre_apellido === "" || nombre_apellido === null);
    localStorage.setItem("usuario", nombre_apellido);
    location.reload();
}

identificarUsuario();
contador();