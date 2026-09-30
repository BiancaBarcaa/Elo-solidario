const CHAVE_CADASTROS = "elo-solidario:cadastros";

export function lerCadastros() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
  } catch (erro) {
    return [];
  }
}

export function salvarCadastro(cadastro) {
  const lista = lerCadastros();
  lista.push(cadastro);
  localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(lista));
}