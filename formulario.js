import { validarCampo } from "./validacao.js";

export function iniciarFormulario(aoEnviarComSucesso) {
  const formulario = document.getElementById("formulario-cadastro");
  if (!formulario) return;

  const toast = document.getElementById("toast-sucesso");
  const seletor =
    "input:not([type=submit]):not([type=button]):not([type=radio]), select, textarea";

  formulario.addEventListener("focusout", function (evento) {
    if (evento.target.matches(seletor)) validarCampo(evento.target);
  });

  formulario.addEventListener("input", function (evento) {
    if (evento.target.matches(seletor) && evento.target.classList.contains("campo--erro")) {
      validarCampo(evento.target);
    }
  });

  formulario.addEventListener("change", function (evento) {
    if (evento.target.name === "ajuda") {
      document.getElementById("erro-ajuda").textContent = "";
    }
  });

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let primeiroInvalido = null;
    formulario.querySelectorAll(seletor).forEach(function (campo) {
      if (!validarCampo(campo) && !primeiroInvalido) primeiroInvalido = campo;
    });

    const erroAjuda = document.getElementById("erro-ajuda");
    const ajudaMarcada = formulario.querySelector('input[name="ajuda"]:checked');
    erroAjuda.textContent = ajudaMarcada ? "" : "Escolha como quer ajudar.";
    if (!ajudaMarcada && !primeiroInvalido) {
      primeiroInvalido = document.getElementById("doar");
    }

    if (primeiroInvalido) {
      primeiroInvalido.focus();
      return;
    }

    aoEnviarComSucesso(Object.fromEntries(new FormData(formulario)));
    formulario.reset();

    toast.classList.add("toast--visivel");
    setTimeout(function () {
      toast.classList.remove("toast--visivel");
    }, 4000);
  });
}