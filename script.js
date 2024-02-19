function(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault()
             alert('E-mail enviado com sucesso!');
          }, function(error) {
             alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
          });
};