# AI Coding Agent Instructions for `banco-web-tests`

Welcome to the `banco-web-tests` repository! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's conventions.

## Project Overview
- **Purpose**: This repository contains automated tests for the `banco` web application.
- **Test Framework**: The project uses [Cypress](https://www.cypress.io/) for end-to-end testing.
- **Structure**:
  - `cypress/e2e/`: Contains test specifications (e.g., `login.cy.js`, `transferencia.cy.js`).
  - `cypress/fixtures/`: Stores test data like `credenciais.json`.
  - `cypress/support/`: Houses custom commands and shared utilities.
  - `cypress/reports/`: Generated test reports, including HTML and screenshots.

## Key Workflows
### Running Tests
- Use the following command to execute all tests:
  ```bash
  npx cypress run
  ```
- To open the Cypress Test Runner for interactive debugging:
  ```bash
  npx cypress open
  ```

### Generating Reports
- Test reports are automatically generated in `cypress/reports/` after running tests.
- Open `cypress/reports/html/index.html` to view the HTML report.

## Project-Specific Conventions
- **Custom Commands**:
  - Defined in `cypress/support/commands/`.
  - Example: `login.js` contains reusable login commands.
- **Test Data**:
  - Use `cypress/fixtures/credenciais.json` for credentials.
  - Avoid hardcoding sensitive data in test files.
- **Test Organization**:
  - Group tests by feature (e.g., `login.cy.js` for login tests).
  - Use descriptive test names to improve readability.

## Integration Points
- **External Dependencies**:
  - Cypress is the primary dependency (see `package.json`).
  - Ensure all dependencies are installed using:
    ```bash
    npm install
    ```
- **Cross-Component Communication**:
  - Shared utilities in `cypress/support/commands/` facilitate communication between tests and the application.

## Examples
### Custom Command Usage
In `login.cy.js`:
```javascript
cy.login('user', 'password');
```
Defined in `cypress/support/commands/login.js`:
```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});
```

### Test Example
In `transferencia.cy.js`:
```javascript
describe('Transferência', () => {
  it('Deve realizar uma transferência com sucesso', () => {
    cy.login('user', 'password');
    cy.visit('/transferencia');
    cy.get('#valor').type('100');
    cy.get('#destinatario').type('12345');
    cy.get('#confirmar').click();
    cy.contains('Transferência realizada com sucesso!');
  });
});
```

## Notes for AI Agents
- Follow the existing patterns in `cypress/e2e/` for writing new tests.
- Reuse and extend custom commands in `cypress/support/commands/`.
- Ensure new tests are added to the appropriate feature file.
- Validate changes by running tests locally before committing.

For any questions or clarifications, refer to the `README.md` or consult the project maintainers.