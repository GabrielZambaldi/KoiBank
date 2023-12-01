function confirmarExclusao() {
    var confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.");

    if (confirmacao) {
        // Obtenha o ID do usuário do seu sistema (substitua pelo valor real)
        var userId = 1;  // Substitua pelo ID real do usuário

        // Use fetch para enviar uma solicitação DELETE
        fetch(`https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/api/usuarios/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response); // Adicione esta linha para verificar a resposta

            if (response.ok) {
                console.log("Conta excluída com sucesso.");

                // Redirecione para a tela de login
                window.location.href = "/HTML/Login.html";
            } else {
                console.error("Erro ao excluir a conta.");
            }
        })
        .catch(error => console.error("Erro na solicitação:", error));
    } else {
        console.log("Exclusão cancelada.");
    }
}

    function enviarFormularioEdicao() {
        const idUsuario = 1; // Substitua isso pelo ID real do usuário
        const formulario = document.getElementById('formularioEdicao');
        const formData = new FormData(formulario);

        // Converta os dados do formulário para um objeto JSON
        const dadosJson = {};
        formData.forEach((valor, chave) => {
            dadosJson[chave] = valor;
        });

        // Faça uma solicitação para a API para editar o usuário
        fetch(`https://congenial-space-winner-7qg96rvw6vg2pvpv-5004.app.github.dev/api/usuarios/editar/${idUsuario}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosJson),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Manipule a resposta do servidor, se necessário
            console.log(data);
            alert('Alterações salvas com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao salvar as alterações:', error);
            alert('Erro ao salvar as alterações. Por favor, tente novamente.');
        });
    }
