// login.js
document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('meuLogin');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoLogin = {
            cpf: document.querySelector('input[name="cpf"]').value,
            senha: document.querySelector('input[name="senha"]').value,
        };

        fetch('http://127.0.0.1:5000/processar_formulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoLogin),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do backend (login):', data);

            if (data.mensagem === 'Login bem-sucedido') {
                alert('Login realizado com sucesso!');
                // Adicione lógica adicional para o sucesso do login, se necessário
                window.location.href = '#';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar para o backend (login):', error);
        });
    });
});

