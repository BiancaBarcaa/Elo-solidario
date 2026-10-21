import { iniciarRouter } from "./router.js";
import { renderizarProjetos, renderizarCadastros } from "./templates.js";
import { iniciarFormulario } from "./formulario.js";
import { lerCadastros, salvarCadastro } from "./storage.js";

function cadastrarUsuario(dados) {
  salvarCadastro({
    nome: dados.nome,
    email: dados.email,
    data: new Date().toISOString(),
  });
  renderizarCadastros(lerCadastros());
}

function montarPagina() {
  renderizarProjetos();
  renderizarCadastros(lerCadastros());
  iniciarFormulario(cadastrarUsuario);
}

iniciarRouter(montarPagina);
montarPagina();

/* Adicionando funcionalidade de contraste */
const botaoContraste = document.getElementById("alternar-contraste");

if (botaoContraste) {
  botaoContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");
    const ativo = document.body.classList.contains("alto-contraste");
    botaoContraste.setAttribute("aria-pressed", ativo);
  });
}