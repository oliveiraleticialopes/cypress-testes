// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
Cypress.Commands.add('fazerLogin', (dados) => {
    cy.fixture("config.json").then((url)=> {
      cy.request({
        method: 'POST',
        url: `${url.servidor}${url.login}`,
        body: dados
      }).then((response) => {
        Cypress.env('token', response.body.token);
      });
    });
});
  
// Cypress.Commands.add('criarcpf', () => {
//     let resultado = '';
//     for (let i = 0; i < 11; i++) {
//         resultado += Math.floor(Math.random() * 10);
//     }
//     return resultado;
// });