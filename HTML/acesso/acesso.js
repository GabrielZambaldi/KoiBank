document.addEventListener('DOMContentLoaded', function() {
    const excluirContaLink = document.getElementById('excluir');

    excluirContaLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Exibir caixa de diálogo de confirmação
        if (confirm('Tem certeza que deseja excluir a conta?')) {
            // Se confirmado, chame a função de exclusão
            excluirConta();
        }
    });

    // Função para excluir a conta
    function excluirConta() {
        // Faça uma solicitação para a API ou execute a lógica de exclusão aqui
        // Exemplo usando fetch para a rota de exclusão no servidor
        fetch('http://127.0.0.1:5000/excluir_conta', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Outros cabeçalhos CORS, se necessário
    },
})
        .then(response => response.json())
        .then(data => {
            // Manipule a resposta do servidor, se necessário
            console.log(data);
            alert('Conta excluída com sucesso!');
            // Redirecione para a página de login ou outra página apropriada
            window.location.href = '/HTML/Login.html';
        })
        .catch(error => {
            console.error('Erro ao excluir a conta:', error);
            alert('Erro ao excluir a conta. Por favor, tente novamente.');
        });
    }
});
