# Testes E2E com Cypress — Automation Exercise

Projeto de automação de testes end-to-end (E2E) para o site público [Automation Exercise](https://www.automationexercise.com).

Este repositório foi desenvolvido **para fins de estudo**, como um trabalho complementar/pós-projeto relacionado a um projeto final. O objetivo é praticar conceitos de qualidade de software, automação de testes e organização de código de teste. Não é um produto comercial nem uma aplicação própria.

## Tecnologias

- **JavaScript (CommonJS):** linguagem e formato de módulos utilizados nos testes e na configuração.
- **Node.js e npm:** ambiente e gerenciador de pacotes para instalar dependências e executar os comandos.
- **Cypress:** ferramenta usada para automatizar o navegador e validar fluxos da aplicação.
- **cypress-real-events:** suporte a interações de navegador mais próximas de eventos reais.
- **cypress-mochawesome-reporter:** geração de relatórios de execução, com gráficos e capturas de tela incorporadas.
- **GitHub Actions:** execução automatizada dos testes de checkout em pushes, pull requests e acionamento manual.

## O que foi feito

Foram automatizados cenários da aplicação de demonstração que cobrem:

- Cadastro de usuário e tentativa de cadastro com e-mail já existente.
- Login com credenciais válidas e inválidas e logout.
- Consulta de produtos, detalhes de um produto e busca.
- Inscrição na newsletter da página inicial.
- Finalização de pedido com cadastro antes do checkout e com login antes do checkout.

Os testes utilizam dados de usuário gerados dinamicamente para reduzir conflitos de e-mail entre execuções. A estrutura separa os cenários E2E, páginas e comandos reutilizáveis, seletores, dados de teste e fixtures.

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── auth/        # Cadastro, login e logout
│   ├── checkout/    # Finalização de pedido
│   ├── home/        # Inscrição na newsletter
│   └── products/    # Consulta e busca de produtos
├── fixtures/        # Dados de teste
└── support/
    ├── commands/    # Comandos Cypress reutilizáveis
    ├── pages/       # Page Objects
    ├── utils/       # Geração de dados de usuário
    └── selectors.js # Seletores centralizados
```

O Cypress está configurado para acessar `https://www.automationexercise.com`, usar viewport de `1280 × 720` e gerar relatórios em `cypress/reports`. Em execução no modo headless, há uma nova tentativa para testes que falharem.

## Requisitos

- Node.js (o workflow de CI usa a versão 22).
- npm.
- Conexão com a internet para acessar o site de demonstração.

## Como instalar e executar

Na pasta do projeto, instale as dependências:

```bash
npm ci
```

Abra o Cypress em modo interativo:

```bash
npm run cy:open
```

Execute todos os testes em modo headless:

```bash
npm test
```

Também é possível usar `npm run cy:run` para executar todos os testes. Para rodar uma área específica:

```bash
npm run test:auth
npm run test:products
npm run test:home
npm run test:checkout
```

Os relatórios Mochawesome são configurados para serem salvos em `cypress/reports` após a execução.

## Integração contínua

O workflow em `.github/workflows/cypress-checkout.yml` instala as dependências com `npm ci` e executa os testes de checkout no GitHub Actions. Ele é acionado em pushes e pull requests que alterem arquivos relacionados ao projeto e também pode ser iniciado manualmente. O relatório é publicado como artefato da execução.

## Observação

Os testes interagem com um site público de demonstração e podem criar contas, carrinhos e pedidos durante a execução. Utilize este projeto apenas para aprendizado e respeite as condições de uso do site. Os cenários de cadastro e checkout tentam remover as contas criadas ao final.
