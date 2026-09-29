🤝 Elo Solidário

Este projeto consiste em um site institucional desenvolvido para a ONG fictícia **Elo Solidário**, com o objetivo de apresentar suas iniciativas sociais e facilitar o cadastro de pessoas interessadas em contribuir com doações ou trabalho voluntário.

A aplicação foi construída utilizando **HTML5**, com foco na organização semântica das páginas, estruturação correta dos conteúdos, navegação entre telas e uso de validações nativas em formulários. O projeto também reforça boas práticas de organização de arquivos e validação de código conforme as recomendações do W3C.

🎯 Objetivo do Projeto

Desenvolver um site simples, organizado e funcional para apresentar uma instituição social, seus projetos e um formulário de cadastro para novos colaboradores.

Além disso, o projeto teve como objetivo colocar em prática conceitos fundamentais de desenvolvimento web, como estrutura HTML, uso de tags semânticas, formulários, validações nativas e organização de assets do projeto.

🚀 Tecnologias Utilizadas

- HTML5
- Git
- GitHub
- Visual Studio Code
- W3C Validator

✨ Funcionalidades

- Página inicial com apresentação da ONG Elo Solidário.
- Página de projetos com iniciativas como cesta solidária, reforço escolar e horta comunitária.
- Página de cadastro para novos colaboradores.
- Menu de navegação entre as páginas do site.
- Formulário com campos obrigatórios.
- Validação de CPF, telefone e CEP utilizando o atributo `pattern`.
- Validação de e-mail com `type="email"`.
- Organização das imagens utilizadas no projeto.
- Estrutura de arquivos separada e organizada.

🧩 Estrutura do Projeto

text
projeto-elo-solidario/
├── index.html
├── projetos.html
├── cadastro.html
└── img/
    ├── elo-solidario-logo.png
    ├── foto-de-capa.jpg
    ├── quem-somos-nos.jpg
    ├── cesta-solidaria.png
    ├── reforco-escolar.png
    └── horta-comunitaria.png
    
✅ Validações HTML5
O formulário de cadastro utiliza validações nativas do HTML5 para garantir que os dados sejam preenchidos corretamente antes do envio.
Foram utilizados atributos como:
- required, para impedir o envio de campos obrigatórios vazios.
- pattern, para definir formatos específicos de CPF, telefone e CEP.
- type="email", para validar o formato do e-mail.
- type="date", para facilitar o preenchimento da data de nascimento.
- placeholder, para orientar o usuário sobre o formato esperado.
- title, para exibir mensagens de orientação quando o dado estiver incorreto.

🔎 Validação W3C
O código-fonte foi submetido ao W3C Validator para verificar possíveis erros estruturais e garantir maior conformidade com os padrões do HTML5.
Durante a validação, foram identificados apenas avisos informativos relacionados ao uso de barra final / em elementos vazios, como <meta>, <img> e <input>. As correções foram realizadas removendo essas barras, deixando o código mais adequado ao padrão HTML5.
Não foram encontrados erros estruturais graves que comprometessem o funcionamento das páginas.

📚 O que Aprendi
Durante o desenvolvimento deste projeto, pude aprimorar conhecimentos em:
- Estruturação de páginas utilizando HTML5.
- Uso de tags semânticas como header, main, section, article, footer e address.
- Criação de formulários com campos obrigatórios.
- Aplicação de validações nativas com atributos HTML5.
- Uso do atributo pattern para definir formatos específicos de entrada.
- Organização de arquivos e pastas em um projeto web.
- Validação de código utilizando o W3C Validator.
- Versionamento e publicação de projetos com Git e GitHub.

🔮 Melhorias Futuras
- Adicionar estilização com CSS.
- Implementar responsividade para diferentes tamanhos de tela.
- Criar interações com JavaScript.
- Melhorar o design visual das páginas.
- Adicionar confirmação visual após o envio do formulário.
- Publicar o projeto utilizando GitHub Pages.
  
👩‍💻 Autora
Bianca Barca
Estudante de Análise e Desenvolvimento de Sistemas, com interesse em Análise de Dados, desenvolvimento web e automação de processos.
