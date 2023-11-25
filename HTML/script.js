document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuformulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            primeiroNome: document.querySelector('input[name="primeiroNome"]').value,
            ultimoNome: document.querySelector('input[name="ultimoNome"]').value,
            cpf: document.querySelector('input[name="cpf"]').value,
            email: document.querySelector('input[name="email"]').value,
            endereco: document.querySelector('input[name="endereco"]').value,
            bairro: document.querySelector('input[name="bairro"]').value,
            numero: document.querySelector('input[name="numero"]').value,
            complemento: document.querySelector('input[name="complemento"]').value,
            CEP: document.querySelector('input[name="CEP"]').value,
            areaCode: document.querySelector('input[name="areaCode"]').value,
            phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
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
            
            // Lógica para lidar com a resposta do servidor
            if (data.mensagem === 'Formulário recebido com sucesso!') {
                // A operação foi bem-sucedida, você pode redirecionar o usuário para outra página, exibir uma mensagem de sucesso, etc.
                alert('Cadastro realizado com sucesso!');
                window.location.href = '#';
            } else {
                // A operação falhou, você pode exibir uma mensagem de erro para o usuário ou tomar outras ações apropriadas.
                alert('Erro ao processar o formulário. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar para o backend:', error);
        });
    });
});