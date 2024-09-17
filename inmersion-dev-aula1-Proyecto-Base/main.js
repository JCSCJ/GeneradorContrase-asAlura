let cantidad = document.getElementById("cantidad");

let boton = document.getElementById("generar");

let contrasena = document.getElementById("contrasena");

const cadenacaracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";

function generar() {

    let numerodigitado = parseInt (cantidad.value);

    if (numerodigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8!");
    }

    let password = "";
    
    for (let i = 0; i < numerodigitado; i++) {
       
        let caracteraleatorio = cadenacaracteres [Math.floor(Math.random() * cadenacaracteres.length)];
        
        password+=caracteraleatorio;
    }

    contrasena.value = password;

    
}

