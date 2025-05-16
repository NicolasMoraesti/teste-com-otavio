$(document).ready(function() {
  $('#bnt_adicionar').click(function(event) {
    event.preventDefault();

    var nome = $('#nome_usuario').val();
    var idade = $('#idade_usuario').val();
    var sobrenome = $('#sobrenome_usuario').val();

    alert(`Seu nome é: ${nome} ${sobrenome} sua idade é: ${idade}`);
  });
});
