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

// Função para exibir detalhes do usuário
async function detalhes(id) {
    const response = await fetch(`http://127.0.0.1:5004/api/usuarios/detalhes/${id}`);
    const data = await response.json();

    // Exibir os detalhes sensíveis no console (não recomendado para informações sensíveis na prática)
    console.log(data);
}





