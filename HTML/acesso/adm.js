document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('meuformulario');

    // Adicione um campo oculto ao formulário para identificar a origem
    const origemInput = document.createElement('input');
    origemInput.type = 'hidden';
    origemInput.name = 'origem';
    origemInput.value = 'adm';
    formulario.appendChild(origemInput);

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const gerarCPF = document.getElementById('gerarCPF').checked;
        const gerarSenha = document.getElementById('gerarSenha').checked;

        const dadosDoFormulario = {
            primeiroNome: document.querySelector('input[name="primeiroNome"]').value,
            ultimoNome: document.querySelector('input[name="ultimoNome"]').value,
            email: document.querySelector('input[name="email"]').value,
            // ... outros campos

            // Gera CPF aleatório apenas quando necessário
            cpf: gerarCPF ? gerarCpfAleatorio() : document.querySelector('input[name="cpf"]').value,
            // Gera senha aleatória apenas quando necessário e se a origem for 'adm'
            senha: gerarSenha && origemInput.value === 'adm' ? gerarSenhaAleatoria() : document.querySelector('input[name="senha"]').value,
        };

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

    // Função para gerar CPF aleatório
    function gerarCpfAleatorio() {
        // Lógica para gerar CPF aleatório usando a biblioteca faker ou outra abordagem de sua escolha
        // Exemplo com faker:
        return faker.br.cpf();
    }

    // Função para gerar senha aleatória
    function gerarSenhaAleatoria() {
        // Lógica para gerar senha aleatória, você pode usar a mesma lógica que mencionei anteriormente
        return Math.random().toString(36).slice(-8);
    }
});






