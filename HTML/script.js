document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuformulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            primeiroNome: document.querySelector('input[name="primeiro nome"]').value,
            ultimoNome: document.querySelector('input[name="último nome"]').value,
            cpf: document.querySelector('input[name="cpf"]').value,
            email: document.querySelector('input[name="email"]').value,
            endereco: document.querySelector('input[name="endereço"]').value,
            bairro: document.querySelector('input[name="bairro"]').value,
            numero: document.querySelector('input[name="número"]').value,
            complemento: document.querySelector('input[name="complemento"]').value,
            cep: document.querySelector('input[name="CEP"]').value,
            areaCode: document.querySelector('input[name="area code"]').value,
            phoneNumber: document.querySelector('input[name="phone number"]').value,
            // Adicione outros campos do formulário conforme necessário
        };

        fetch('https://legendary-trout-66jgqr9wj6rh4jvp-5000.app.github.dev/processar_formulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do backend:', data);
            // Adicione aqui a lógica para lidar com a resposta do back-end, se necessário
        })
        .catch(error => {
            console.error('Erro ao enviar para o backend:', error);
        });
    });
});
