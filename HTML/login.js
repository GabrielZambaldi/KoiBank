document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('meuLogin');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            cpf: document.querySelector('input[name="cpf"]').value,
            senha: document.querySelector('input[name="senha"]').value,
        };

        fetch('https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if ('mensagem' in data && data.mensagem === 'Login bem-sucedido!') {
                const idUsuario = data.id_usuario;

                // Exemplo de uma requisição para obter mensagens personalizadas
                fetch(`https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/mensagens/${idUsuario}`)
                    .then(response => response.json())
                    .then(data => {
                        if ('mensagem_personalizada' in data) {
                            alert(data.mensagem_personalizada);
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao obter mensagens personalizadas:', error);
                    });

                alert('Login realizado com sucesso!');
                // Adicione lógica adicional para o sucesso do login, se necessário
                window.location.href = './acesso/acesso.html';  // Redireciona para a próxima página
            } else if ('erro' in data) {
                alert('Credenciais incorretas. Tente novamente.');
            } else {
                console.error('Resposta inesperada do servidor:', data);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao processar o login. Por favor, tente novamente.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Lógica para processar o formulário de login
    const formularioLogin = document.getElementById('meuLogin');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoLogin = {
            cpf: document.querySelector('input[name="cpf"]').value,
            senha: document.querySelector('input[name="senha"]').value,
        };

        // Verificar se o CPF e a senha são "admin"
        if (dadosDoLogin.cpf === 'admin' && dadosDoLogin.senha === 'admin') {
            // Redirecionar para o arquivo adm.html
            window.location.href = './acesso/adm.html';
            return; // Parar a execução do código restante
        }

        // Se não for "admin", continuar com a solicitação para o backend
        fetch('https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/login', {
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
            } else {
                // Lógica para tratamento de falha de login
            }
        })
        .catch(error => {
            console.error('Erro ao enviar para o backend (login):', error);
        });
    });
});
