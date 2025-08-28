// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.js'

const supabaseUrl = 'https://bhkigsipuxqgpafikglm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2lnc2lwdXhxZ3BhZmlrZ2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDE4NDMsImV4cCI6MjA3MTM3Nzg0M30.IBHX2UHeP7foTo96MFUAZUHc40O1gyNBeKqolhhceXM'; // Substitua por variável de ambiente em produção
const supabase = createClient(supabaseUrl, supabaseKey);

export async function cadastrarUsuario(codigo, nome, senha) {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ codigo, nome, senha }]);

  if (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
  return data;
}

export async function validarLogin(nome, senha) {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('nome', nome)
    .eq('senha', senha)
    .limit(1);

  if (error) {
    console.error("Erro ao validar login:", error);
    throw error;
  }
  return data[0] || null;
}

export function logout() {
  window.location.href = 'login.html';
}
