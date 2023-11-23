document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuformulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Evento de envio acionado!');

        // Obter dados do formulário
        const dadosDoFormulario = {
            primeiroNome: document.querySelector('input[name="primeiro nome"]').value,
            ultimoNome: document.querySelector('input[name="último nome"]').value,
            cpf: document.querySelector('input[name="cpf"]').value,
            email: document.querySelector('input[name="email"]').value,
            // Adicionar outros campos conforme necessário
        };

        // Enviar dados para o backend
        enviarParaBackend(dadosDoFormulario);
    });
});

function enviarParaBackend(dados) {
    // URL do seu backend
    const urlBackend = 'https://legendary-trout-66jgqr9wj6rh4jvp-5000.app.github.dev/'; // Substitua pela URL real do seu backend

    // Fazer uma requisição POST usando fetch
    fetch(urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do backend:', data);

        // Adicione lógica para lidar com a resposta do backend, se necessário
    })
    .catch(error => {
        console.error('Erro ao enviar para o backend:', error);
    });
}
