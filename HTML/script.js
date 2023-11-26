document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuformulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            primeiroNome: document.querySelector('input[name="primeiroNome"]').value,
            ultimoNome: document.querySelector('input[name="ultimoNome"]').value,
            cpf: document.querySelector('input[name="cpf"]').value,
            senha: document.querySelector('input[name="senha"]').value,
            email: document.querySelector('input[name="email"]').value,
            endereco: document.querySelector('input[name="endereco"]').value,
            bairro: document.querySelector('input[name="bairro"]').value,
            numero: document.querySelector('input[name="numero"]').value,
            complemento: document.querySelector('input[name="complemento"]').value,
            CEP: document.querySelector('input[name="CEP"]').value,
            areaCode: document.querySelector('input[name="areaCode"]').value,
            phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
            id_usuario: document.querySelector('input[name="id_usuario"]').value,
        };

        fetch('http://127.0.0.1:5000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            // Adicione aqui a lógica para lidar com a resposta do back-end, se necessário
            if (data.mensagem === 'Cadastro realizado com sucesso!') {
                alert('Cadastro realizado com sucesso!');
                // Ou exiba a mensagem em algum lugar na sua página
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});

