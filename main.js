$(document).ready(function() {
  $('#bnt_adicionar').click(function(event) {
    event.preventDefault();

    var nome = $('#nome_usuario').val();
    var idade = $('#idade_usuario').val();
    var email = $('#email_usuario').val();

    alert(`Seu nome é: ${nome} sua idade é: ${idade} e seu E-mail é: ${email}`);
  });
});
