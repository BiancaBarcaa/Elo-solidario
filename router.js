export function iniciarRouter(aoRenderizar) {
  const app = document.getElementById("app");
  if (!app) return;

  const conteudoInicial = app.innerHTML;

  function paginaAtual() {
    return location.pathname.split("/").pop() || "index.html";
  }

  async function renderizar(pagina) {
    if (pagina === "index.html") {
      app.innerHTML = conteudoInicial;
    } else {
      try {
        const resposta = await fetch(pagina);
        if (!resposta.ok) throw new Error("Página não encontrada");

        const texto = await resposta.text();
        const documento = new DOMParser().parseFromString(texto, "text/html");
        app.innerHTML = documento.querySelector("main").innerHTML;
      } catch (erro) {
        app.innerHTML = "<p>Página não encontrada.</p>";
      }
    }

    aoRenderizar();
  }

  document.addEventListener("click", function (evento) {
    const link = evento.target.closest("[data-link]");
    if (!link) return;

    evento.preventDefault();
    const pagina = link.getAttribute("href");
    history.pushState({ pagina }, "", pagina);
    renderizar(pagina);
  });

  window.addEventListener("popstate", function () {
    renderizar(paginaAtual());
  });
}