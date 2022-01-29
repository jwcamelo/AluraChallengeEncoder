var btnCrip = document.querySelector("#btn-crip");
var btnDecrip = document.querySelector("#btn-decrip");
var btnCopiar = document.querySelector("#btn-copiar");
var titulo = document.querySelector("#title-msg");

btnCrip.addEventListener("click", () => {
    var textArea = document.querySelector("#textArea");
    var texto = textArea.value;

    var letras = texto.split("");
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] == "a") {
            letras[i] = "ai";
        }
        if (letras[i] == "i") {
            letras[i] = "imes";
        }
        if (letras[i] == "e") {
            letras[i] = "enter";
        }
        if (letras[i] == "o") {
            letras[i] = "ober";
        }
        if (letras[i] == "u") {
            letras[i] = "ufat";
        }
    }

    var msgCriptografada = letras.join("");
    var textAreaCrip = document.querySelector("#msgCriptografada");

    titulo.innerHTML = "Mensagem Criptografada";

    textAreaCrip.value = msgCriptografada;
});

btnDecrip.addEventListener("click", function () {
    var textArea = document.querySelector("#textArea");
    var texto = textArea.value;

    var newTxt = texto.replaceAll("ai", "a");
    newTxt = newTxt.replaceAll("ober", "o");
    newTxt = newTxt.replaceAll("enter", "e");
    newTxt = newTxt.replaceAll("imes", "i");
    newTxt = newTxt.replaceAll("ufat", "u");

    var textAreaCrip = document.querySelector("#msgCriptografada");
    titulo.innerHTML = "Mensagem Decriptografada";

    textAreaCrip.value = newTxt;
});

btnCopiar.addEventListener("click", function () {
    var textAreaCrip = document.querySelector("#msgCriptografada");
    var textArea = document.querySelector("#textArea");

    navigator.clipboard.writeText(textAreaCrip.value);

    textAreaCrip.value = "";
    textArea.value = "";

});