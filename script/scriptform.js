function validar() {
    var ret_email = validar_email();
    var ret_pass = validar_pass();
    var ret_direccion = validar_direccion();
    var ret_telefono = validar_telefono();
    var ret_url = validar_url();
    return ret_email && ret_pass && ret_direccion && ret_telefono && ret_url;
}



function validar_url() {
    var url = document.getElementById("url").value;
    var div = document.getElementById("err_url");
    var com = url.indexOf(".com");
    var cl = url.indexOf(".cl");

    if (url.trim()=== "" ){
        div.innerText="";
        div.className="";
        return false;

    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
        div.innerText="La URL debe de comenzar con http:// o https://";
        div.className="text-danger";
        return false;

    }else {
        if (com < 1 && cl < 1 ){
            div.innerText = "debe de tener .cl o .com";
            div.className = "text-danger";
            return false;
        }
    }
    }
 }

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    
    if (email == "") {
        div.innerText = "Nombre de usuario no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 1 ) {    
        div.innerText = "el corrreo no tiene @";
        div.className = "text-danger";
        return false; 
        
    } else {
        if (arroba < 2) {
            div.innerText = "el nombre del correo no es valido";
            div.className = "text danger";   
            return false; 

        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText="El nombre del dominio no es valido";
                div.className="text-danger";
                return false; 
            } else {            
                div.innerText="";
                return true;
            }
        }
    }    
}
}


function validar_pass() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var div = document.getElementById("err_pass1");
    

    if (pass1.trim() === "") {
        div.innerText="Debe de ingresar una contraseña";
        div.className="text-danger";
        return false;
    } else {
    if (pass1.length < 3 || pass1.length > 6) {
            div.innerText="La contraseña debe de tener mínimo 3 caracteres y maximo 6 caracteres"
            div.className="text-danger";
            return false;
        } else if (!/[a-zA-Z]/.test(pass1) || !/\d/.test(pass1)) {
            div.innerText = "La contraseña debe contener al menos una mayúscula y números";
            div.className = "text-danger";
            return false;
        }else {
        if (pass1 != pass2) {
                div.innerText="Las contraseñas no coinciden";
                div.className="text-danger";
                return false;
                }else{
                    div.innerText="";
                    return true;

            }
        }
    }
}

function validar_direccion () {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direc");

    if (direccion == "") {
            div.innerText = "Direccion no puede estar en blanco";
            div.className = "text-danger";
            return false;

    }
}

function validar_telefono() {
    var telefono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");
    if (telefono.trim() == "") {
        div.innerText = "Teléfono no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (telefono != 9 ) {
            div.innerText="El teléfono debe de tener 9 dígitos"
            div.className="text-danger";
            return false;
    }
}}


const personas = [];

function proceso() {
    let input = document.getElementById("nombre");
    personas.push(input.value);
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    div.appendChild(ul);
    for (let i = 0; i < personas.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = personas[i];
        ul.appendChild(li);
    }
    
}