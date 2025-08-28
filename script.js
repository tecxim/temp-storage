const supabaseUrl = 'https://bhkigsipuxqgpafikglm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2lnc2lwdXhxZ3BhZmlrZ2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDE4NDMsImV4cCI6MjA3MTM3Nzg0M30.IBHX2UHeP7foTo96MFUAZUHc40O1gyNBeKqolhhceXM';
const client = supabase.createClient(supabaseUrl, supabaseKey);

// Verificar se o usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', async function() {
    // Verificar sessão ativa no Supabase
    const { data: { user } } = await supabase.auth.getUser();
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage !== 'login.html' && !user) {
        window.location.href = 'login.html';
    }
});

// Função para fazer login com Supabase
document.getElementById('formLogin')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('codigoLogin').value; // Substitua 'codigoLogin' por 'emailLogin' no HTML
    const senha = document.getElementById('senhaLogin').value;

    // Autenticar com Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
    });

    if (error) {
        alert('Erro ao fazer login: ' + error.message);
    } else {
        window.location.href = 'cadastro.html';
    }
});

// Função para fazer logout com Supabase
function logout() {
    supabase.auth.signOut()
        .then(() => {
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert('Erro ao fazer logout: ' + error.message);
        });
}
