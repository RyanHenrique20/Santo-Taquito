// Pega os elementos do HTML pelo id
const formulario = document.getElementById("formContato");
const confirmacao = document.getElementById("contato-confirmacao");
const tituloConfirmacao = document.getElementById("contato-confirmacao-titulo");

// Executa quando a pessoa clica em Enviar (e os campos obrigatórios estão preenchidos)
formulario.addEventListener("submit", function (evento) {

  // Impede a página de recarregar
  evento.preventDefault();

  // Mostra a mensagem "Contato recebido!"
  confirmacao.hidden = false;

  // Esconde o formulário, mas a caixa branca continua na tela
  formulario.hidden = true;

  // Coloca o foco no título para o leitor de tela anunciar a mensagem
  tituloConfirmacao.focus();
});