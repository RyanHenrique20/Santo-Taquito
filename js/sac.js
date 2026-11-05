// Pega os elementos do HTML pelo id
const formularioSac = document.getElementById("formSac");
const tituloSac = document.getElementById("sac-titulo");
const confirmacaoSac = document.getElementById("sac-confirmacao");
const tituloConfirmacaoSac = document.getElementById("sac-confirmacao-titulo");

// Executa quando a pessoa clica em Enviar (e os campos obrigatórios estão preenchidos)
formularioSac.addEventListener("submit", function (evento) {

  // Impede a página de recarregar
  evento.preventDefault();

  // Mostra a mensagem "Mensagem recebida!"
  confirmacaoSac.hidden = false;

  // Esconde o título "Fale com a gente" e o formulário
  tituloSac.hidden = true;
  formularioSac.hidden = true;

  // Coloca o foco no título para o leitor de tela anunciar a mensagem
  tituloConfirmacaoSac.focus();
});