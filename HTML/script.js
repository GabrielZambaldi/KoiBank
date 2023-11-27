document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuformulario');

    // Adicione um campo oculto ao formulário para identificar a origem
    const origemInput = document.createElement('input');
    origemInput.type = 'hidden';
    origemInput.name = 'origem';
    origemInput.value = 'usuario';
    formulario.appendChild(origemInput);

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const dadosDoFormulario = {
            primeiroNome: formulario.elements['primeiroNome'].value,
            ultimoNome: formulario.elements['ultimoNome'].value,
            cpf: formulario.elements['cpf'].value,
            senha: formulario.elements['senha'].value,
            email: formulario.elements['email'].value,
            endereco: formulario.elements['endereco'].value,
            bairro: formulario.elements['bairro'].value,
            numero: formulario.elements['numero'].value,
            complemento: formulario.elements['complemento'].value,
            CEP: formulario.elements['CEP'].value,
            areaCode: formulario.elements['areaCode'].value,
            phoneNumber: formulario.elements['phoneNumber'].value,  // Altere para 'phoneNumber'
            id_usuario: formulario.elements['id_usuario'].value,
            origem: 'usuario',
        };

        // Não envie o CPF automaticamente, permita que o usuário o forneça no formulário

        fetch('https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/cadastrar', {
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

