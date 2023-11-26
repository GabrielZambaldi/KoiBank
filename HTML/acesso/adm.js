async function excluirUsuarioConfirmacao(id, nome) {
    const confirmacao = confirm(`Deseja realmente excluir o usuário ${nome}?`);
    if (confirmacao) {
        try {
            const response = await fetch(`http://127.0.0.1:5004/api/usuarios/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const data = await response.json();
                document.getElementById('mensagem').innerHTML = `<p>${data.mensagem}</p>`;
                listarUsuarios(); // Atualiza a tabela após a exclusão
            } else {
                const data = await response.json();
                document.getElementById('mensagem').innerHTML = `<p>Erro: ${data.erro}</p>`;
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            document.getElementById('mensagem').innerHTML = '<p>Erro inesperado ao excluir usuário</p>';
        }
    }
}

// Função para listar usuários
async function listarUsuarios() {
    const response = await fetch('http://127.0.0.1:5004/api/usuarios');
    const data = await response.json();

    const tabelaUsuarios = document.getElementById('tabela-usuarios');
    tabelaUsuarios.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados

    data.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.primeiro_nome}</td>
            <td>${usuario.ultimo_nome}</td>
            <td>${usuario.cpf}</td>
            <td>${usuario.email}</td>
            <td>
                <button onclick="excluirUsuarioConfirmacao(${usuario.id}, '${usuario.primeiro_nome} ${usuario.ultimo_nome}')">Excluir</button>
                <button onclick="detalhes(${usuario.id})">Detalhes</button>
            </td>
        `;
        tabelaUsuarios.appendChild(tr);
    });
}

async function criarUsuario() {
    console.log('Tentando criar usuário...');

    try {
        const response = await fetch('http://127.0.0.1:5004/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                primeiro_nome: 'Novo',
                ultimo_nome: 'Usuário',
                cpf: '1234567892',
                senha: 'senha123',
                email: 'novo.usuario@example.com',
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Resposta do servidor:', data);
            exibirMensagem(data.mensagem);
            listarUsuarios(); // Atualiza a tabela após a criação
        } else {
            const data = await response.json();
            console.log('Erro ao criar usuário:', data);
            exibirMensagem(`Erro: ${data.erro}`);
        }
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        exibirMensagem('Erro inesperado ao criar usuário');
    }
}






