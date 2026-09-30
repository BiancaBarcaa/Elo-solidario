function calcularIdade(valor) {
  const nascimento = new Date(valor + "T00:00:00");
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  if (
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() < nascimento.getDate())
  ) {
    idade--;
  }
  return idade;
}

function erroDoCampo(campo) {
  if (
    campo.id === "data__nascimento" &&
    campo.value &&
    calcularIdade(campo.value) < 18
  ) {
    return "É necessário ter pelo menos 18 anos para se cadastrar.";
  }
  if (campo.validity.valueMissing) return "Preencha este campo.";
  if (campo.validity.typeMismatch) return "Formato inválido. Confira o dado digitado.";
  if (campo.validity.patternMismatch) return "Formato incorreto. Siga o modelo do campo.";
  if (campo.validity.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;
  return campo.checkValidity() ? "" : campo.validationMessage;
}

function obterAviso(campo) {
  let aviso = campo.nextElementSibling;
  if (!aviso || !aviso.classList.contains("campo__erro")) {
    aviso = document.createElement("span");
    aviso.className = "campo__erro";
    aviso.setAttribute("role", "alert");
    campo.insertAdjacentElement("afterend", aviso);
  }
  return aviso;
}

export function validarCampo(campo) {
  const mensagem = erroDoCampo(campo);
  obterAviso(campo).textContent = mensagem;
  campo.classList.toggle("campo--erro", mensagem !== "");
  campo.setAttribute("aria-invalid", mensagem !== "");
  return mensagem === "";
}