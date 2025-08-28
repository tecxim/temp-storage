// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.js'


// Configuração única
  const supabaseUrl = 'https://bhkigsipuxqgpafikglm.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2lnc2lwdXhxZ3BhZmlrZ2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDE4NDMsImV4cCI6MjA3MTM3Nzg0M30.IBHX2UHeP7foTo96MFUAZUHc40O1gyNBeKqolhhceXM';
  const client = supabase.createClient(supabaseUrl, supabaseKey);

// Função para cadastrar usuário
export async function cadastrarUsuario(codigo, nome, senha) {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ codigo, nome, senha }])
  if (error) throw error
  return data
}

// Função para validar login
export async function validarLogin(nome, senha) {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('nome', nome)
    .eq('senha', senha)
    .limit(1)
  if (error) throw error
  return data[0] || null
}

// Função para logout
export function logout() {
  window.location.href = 'login.html'
}
