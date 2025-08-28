<script type="module">
  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  // Configuração única
    const supabaseUrl = 'https://bhkigsipuxqgpafikglm.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2lnc2lwdXhxZ3BhZmlrZ2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDE4NDMsImV4cCI6MjA3MTM3Nzg0M30.IBHX2UHeP7foTo96MFUAZUHc40O1gyNBeKqolhhceXM';
    const client = supabase.createClient(supabaseUrl, supabaseKey);

  // Função para verificar se usuário está logado
  export async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser()
    const currentPage = window.location.pathname.split('/').pop()

    if (currentPage !== 'login.html' && !user) {
      window.location.href = 'login.html'
    }
  }

  // Função de login
  export async function login(email, senha) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha })
    if (error) throw error
    return data
  }

  // Função de logout
  export async function logout() {
    await supabase.auth.signOut()
    window.location.href = 'login.html'
  }
</script>
