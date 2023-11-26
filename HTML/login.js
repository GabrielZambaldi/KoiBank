document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('meuLogin');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            cpf: document.querySelector('input[name="cpf"]').value,
            senha: document.querySelector('input[name="senha"]').value,
        };

        fetch('http://127.0.0.1:5000/login', {
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
                alert('Login realizado com sucesso!');
                // Adicione lógica adicional para o sucesso do login, se necessário
                window.location.href = './acesso/acesso.html';  // Redireciona para a próxima página
            } else if ('erro' in data) {
                alert('Credenciais incorretas. Tente novamente.');
            } else {
                // Trate qualquer outra condição ou resposta inesperada aqui
                console.error('Resposta inesperada do servidor:', data);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao processar o login. Por favor, tente novamente.');
        });
    });
});
