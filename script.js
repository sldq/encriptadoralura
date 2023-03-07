// LLAVES DE ENCRIPTACION
// e - enter
// i - imes
// o - ober
// a - ai
// u - ufat

function encriptar() {
    
    var texto = document.getElementById("ingreso-de-texto").value.toLowerCase();

    // i = afecta mayusculas y minusculas
    // g = afecta a toda la linea u oración
    // m = afecta multiples lineas o parrafos
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
    
    var texto = document.getElementById("ingreso-de-texto").value.toLowerCase();

    // se invierten las llaves de encriptación
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar() {
    var contenido = document.querySelector("#message2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado con éxito.");
}