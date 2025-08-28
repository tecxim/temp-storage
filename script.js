// Verificar se o usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage !== 'login.html' && !isLoggedIn) {
        window.location.href = 'login.html';
    }
});

// Função para fazer login
document.getElementById('formLogin')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const codigo = document.getElementById('codigoLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Simular autenticação (substituir por chamada real ao backend)
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo, senha })
    });

    const result = await response.json();
    if (result.success) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'cadastro.html';
    } else {
        alert('Código ou senha incorretos!');
    }
});

// Função para fazer logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}
