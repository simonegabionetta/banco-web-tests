# Projeto de Testes Automatizados - Banco Web Tests

Este repositório foi criado com o objetivo de aprender como automatizar testes utilizando o framework [Cypress](https://www.cypress.io/) na mentoria 2.0 Júlio de Lima. Ele contém testes automatizados para a aplicação web do Banco, garantindo a qualidade e a confiabilidade das funcionalidades principais da aplicação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`cypress/e2e/`**: Contém os arquivos de especificação dos testes, como:
  - `login.cy.js`: Testes relacionados ao login.
  - `transferencia.cy.js`: Testes relacionados à funcionalidade de transferência.

- **`cypress/fixtures/`**: Armazena dados de teste, como credenciais, no arquivo `credenciais.json`.

- **`cypress/support/`**: Contém comandos customizados e utilitários compartilhados:
  - `commands.js`: Arquivo principal para comandos customizados.
  - `commands/login.js`: Comandos reutilizáveis para login.
  - `commands/transferencia.js`: Comandos reutilizáveis para transferência.

- **`cypress/reports/`**: Diretório onde os relatórios de teste são gerados automaticamente. Inclui:
  - `html/index.html`: Relatório em formato HTML gerado pelo [cypress-mochawesome-reporter](https://github.com/cypress-io/cypress-mochawesome-reporter).

- **`cypress/screenshots/`** e **`cypress/videos/`**: Capturas de tela e vídeos gerados durante a execução dos testes.

## Pré-requisitos

Para executar os testes, é necessário que:

1. A API do Banco esteja em execução. Repositório: [banco-api](https://github.com/juliodelimas/banco-api).
2. A aplicação web do Banco esteja em execução. Repositório: [banco-web](https://github.com/juliodelimas/banco-web).

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/simonegabionetta/banco-web-tests.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd banco-web-tests
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Testes

### Modo Headless
Para executar todos os testes em modo headless e gerar relatórios:
```bash
npx cypress run
```

### Modo Interativo
Para abrir o Test Runner do Cypress e executar os testes de forma interativa:
```bash
npx cypress open
```

## Relatórios

Os relatórios de teste são gerados automaticamente no diretório `cypress/reports/`. Para visualizar o relatório em HTML, abra o arquivo:
```
cypress/reports/html/index.html
```

## Documentação dos Testes

### Testes Implementados

- **Login**:
  - Verifica se o login com credenciais válidas é bem-sucedido.
  - Testa mensagens de erro para credenciais inválidas.

- **Transferência**:
  - Realiza uma transferência com sucesso.
  - Valida mensagens de erro para valores inválidos ou destinatários inexistentes.

### Comandos Customizados

Os comandos customizados estão localizados em `cypress/support/commands/` e incluem:

- **Login** (`commands/login.js`):
  - `cy.login(username, password)`: Realiza o login com as credenciais fornecidas.

- **Transferência** (`commands/transferencia.js`):
  - `cy.realizarTransferencia(valor, destinatario)`: Realiza uma transferência com os dados fornecidos.

Esses comandos ajudam a reutilizar código e manter os testes mais organizados.

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
