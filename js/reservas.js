
//validação dos dados, encontra
const formulario = document.getElementById("reservas-form");
const confirmacao = document.getElementById("reservas-confirmacao");
const tituloConfirmacao = document.getElementById(
    "reservas-confirmacao-titulo"
);

//aguarda evento
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Esconde o formulário
    formulario.hidden = true;
    document.querySelector(".reservas-formulario > h2").hidden = true;

    // Mostra a confirmação, f auxilia quem navega 
    confirmacao.hidden = false;
    tituloConfirmacao();
});