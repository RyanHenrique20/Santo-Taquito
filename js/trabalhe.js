// Pega os elementos do HTML pelo id
const formularioCandidatura = document.getElementById("formCandidatura");
const tituloCandidatura = document.getElementById("candidatura-titulo");
const confirmacaoCandidatura = document.getElementById("candidatura-confirmacao");
const tituloConfirmacaoCandidatura = document.getElementById("candidatura-confirmacao-titulo");

// Executa quando a pessoa clica em Enviar (e os campos obrigatórios estão preenchidos)
formularioCandidatura.addEventListener("submit", function (evento) {

  // Impede a página de recarregar
  evento.preventDefault();

  // Mostra a mensagem "Candidatura enviada!"
  confirmacaoCandidatura.hidden = false;

  // Esconde o título "Envie sua candidatura" e o formulário
  tituloCandidatura.hidden = true;
  formularioCandidatura.hidden = true;

  // Coloca o foco no título para o leitor de tela anunciar a mensagem
  tituloConfirmacaoCandidatura.focus();
});