 🤝 Elo Solidário

Este projeto consiste em um site institucional desenvolvido para a ONG fictícia Elo Solidário, com o objetivo de apresentar suas iniciativas sociais e facilitar o cadastro de pessoas interessadas em contribuir com doações ou trabalho voluntário.

A aplicação foi construída com HTML5 semântico, CSS3 (estilização em andamento) e JavaScript puro (Vanilla JS), organizado em módulos ES6. O site funciona como uma Single Page Application (SPA), com navegação sem recarregar a página, geração dinâmica de componentes, validação de formulário em tempo real e persistência de dados no navegador.

🎯 Objetivo do Projeto

Desenvolver um site organizado e funcional para apresentar uma instituição social, seus projetos e um formulário de cadastro para novos colaboradores.

Além disso, o projeto teve como objetivo colocar em prática conceitos fundamentais de desenvolvimento web, como estrutura HTML semântica, manipulação do DOM, eventos, validação de dados, armazenamento local e modularização de código.

 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (estilização em andamento)
- JavaScript (ES6 Modules)
- Git
- GitHub
- Visual Studio Code
- W3C Validator

 ✨ Funcionalidades

- Página inicial com apresentação da ONG Elo Solidário.
- Página de projetos com iniciativas como cesta solidária, reforço escolar e horta comunitária.
- Página de cadastro para novos colaboradores.
- Navegação SPA: os links são interceptados e o conteúdo é trocado na `div#app`, sem recarregar a página, com suporte aos botões voltar e avançar do navegador (History API).
- Cards de projetos gerados dinamicamente a partir de um array de dados, com Template Literals.
- Validação do formulário em tempo real e no envio, com mensagens de erro exibidas na própria página e mudança visual nos campos inválidos.
- Regra de idade mínima de 18 anos calculada a partir da data de nascimento.
- Validação de CPF, telefone e CEP com o atributo `pattern`, e de e-mail com `type="email"`.
- Aviso visual de confirmação após o envio do formulário.
- Lista dos últimos cadastros salva no `localStorage`, que permanece mesmo após fechar o navegador.
- Tratamento de falhas de carregamento das páginas e de dados corrompidos no armazenamento.
- Modo de alto contraste, ativado por botão, para melhorar a leitura e a acessibilidade visual.

 🧩 Estrutura do Projeto

text
projeto-elo-solidario/
├── index.html
├── projetos.html
├── cadastro.html
├── style.css
├── main.js
├── router.js
├── templates.js
├── validacao.js
├── formulario.js
├── storage.js
└── img/
    ├── elo-solidario-logo.png
    ├── foto-de-capa.jpg
    ├── quem-somos-nos.jpg
    ├── cesta-solidaria.png
    ├── reforco-escolar.png
    └── horta-comunitaria.png
```

 🧱 Organização do JavaScript

O código foi separado em módulos, cada um com uma responsabilidade:

- `main.js`: ponto de entrada, que importa os módulos e os conecta.
- `router.js`: navegação SPA com a History API e renderização na `div#app`.
- `templates.js`: dados dos projetos e geração dos componentes na tela.
- `validacao.js`: regras de consistência dos campos e exibição dos avisos de erro.
- `formulario.js`: eventos do formulário (`focusout`, `input`, `change` e `submit`).
- `storage.js`: leitura e gravação no `localStorage`.

 ✅ Validações do Formulário

O formulário usa o atributo `novalidate` para que as mensagens de erro sejam controladas pelo JavaScript, e não pelos balões do navegador. As regras combinam atributos HTML5 e lógica própria:

- `required`, para impedir o envio de campos obrigatórios vazios.
- `pattern`, para definir formatos específicos de CPF, telefone e CEP.
- `type="email"`, para validar o formato do e-mail.
- `type="date"` e cálculo da idade, para exigir pelo menos 18 anos.
- Validação à parte do grupo de opções "Como quer ajudar?".
- `aria-invalid` e `role="alert"`, para que os avisos sejam acessíveis a leitores de tela.

 💾 Armazenamento Local

Os cadastros enviados (nome, e-mail e data do envio) são gravados no `localStorage` como JSON, com `JSON.stringify`, e recuperados com `JSON.parse` a cada carregamento da página. Dados sensíveis, como CPF e telefone, não são armazenados.

 🔎 Validação W3C

O código-fonte HTML foi submetido ao W3C Validator para verificar possíveis erros estruturais e garantir maior conformidade com os padrões do HTML5. Durante a validação, foram identificados apenas avisos informativos relacionados ao uso de barra final `/` em elementos vazios. As correções foram realizadas removendo essas barras, deixando o código mais adequado ao padrão HTML5. Não foram encontrados erros estruturais graves que comprometessem o funcionamento das páginas.

 ♿ Acessibilidade Visual

Foi adicionado um botão de alto contraste no cabeçalho da página inicial. Ao ser acionado, o JavaScript adiciona ou remove a classe `alto-contraste` no `body`, alterando as cores principais da interface para fundo preto, texto branco e links em amarelo.

O botão também utiliza o atributo `aria-pressed`, indicando para tecnologias assistivas se o modo de alto contraste está ativo ou desativado. Além disso, foi usado `:focus-visible` no CSS para destacar melhor elementos focados durante a navegação por teclado.

▶️ Como Executar

Como a navegação SPA usa `fetch` e módulos ES6, o projeto precisa ser aberto por um servidor local, e não clicando direto no arquivo. A forma mais simples é usar a extensão **Live Server** do Visual Studio Code: clique com o botão direito no `index.html` e escolha "Open with Live Server".

📚 O que Aprendi

Durante o desenvolvimento deste projeto, pude aprimorar conhecimentos em:

- Estruturação de páginas com HTML5 semântico.
- Criação de formulários e validação de dados com HTML5 e JavaScript.
- Manipulação do DOM e tratamento de eventos.
- Navegação SPA com a History API e `fetch`.
- Geração de componentes com Template Literals.
- Persistência de dados com `localStorage`.
- Modularização do código com ES6 Modules.
- Depuração com o Console e a aba Network do navegador.
- Versionamento e publicação de projetos com Git e GitHub.
- Aplicação de recursos de acessibilidade visual, como modo de alto contraste e destaque de foco.

 🔮 Melhorias Futuras

- Concluir a estilização com CSS e melhorar o design visual das páginas.
- Implementar responsividade para diferentes tamanhos de tela.
- Implementar máscaras automáticas de digitação para CPF, telefone e CEP.
- Publicar o projeto utilizando GitHub Pages.
- Integrar o formulário a um back-end para armazenar os cadastros em um servidor.

🌿 Fluxo de Branches (GitFlow)

O repositório segue o modelo GitFlow:

- `main`: versão de lançamento, sempre estável.
- `develop`: desenvolvimento contínuo, onde as funcionalidades são integradas.
- `feature/*`: novas funcionalidades, criadas a partir da `develop` (ex.: `feature/estilizacao-css`).
- `hotfix/*`: correções urgentes, criadas a partir da `main` (ex.: `hotfix/corrige-readme`).


 👩‍💻 Autora

Bianca Barca
Estudante de Análise e Desenvolvimento de Sistemas, com interesse em Análise de Dados, desenvolvimento web e automação de processos.
