const projetos = [
  {
    titulo: "Cesta Solidária",
    categoria: "Doação",
    descricao: "Arrecadamos e distribuímos alimentos para famílias em situação de vulnerabilidade.",
    imagem: "img/cesta-solidaria.png",
  },
  {
    titulo: "Reforço Escolar",
    categoria: "Voluntariado",
    descricao: "Voluntários ajudam crianças e jovens com aulas de apoio em várias disciplinas.",
    imagem: "img/reforco-escolar.png",
  },
  {
    titulo: "Horta Comunitária",
    categoria: "Voluntariado",
    descricao: "Cultivo coletivo de alimentos que fortalece a comunidade e a alimentação saudável.",
    imagem: "img/horta-comunitaria.png",
  },
];

function criarCard(projeto) {
  return `
    <article class="card">
      <img src="${projeto.imagem}" alt="${projeto.titulo}">
      <span class="card__categoria">${projeto.categoria}</span>
      <h3 class="card__titulo">${projeto.titulo}</h3>
      <p class="card__texto">${projeto.descricao}</p>
    </article>
  `;
}

export function renderizarProjetos() {
  const container = document.getElementById("lista-projetos");
  if (!container) return;

  container.innerHTML = projetos.map(criarCard).join("");
}

export function renderizarCadastros(lista) {
  const container = document.getElementById("lista-cadastros");
  if (!container) return;

  const itens = lista.map(function (cadastro) {
    const li = document.createElement("li");
    li.textContent = cadastro.nome;
    return li;
  });

  container.replaceChildren(...itens);
}