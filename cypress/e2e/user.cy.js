import { faker } from '@faker-js/faker';



before(() => {
  const dados = {
    mail: Cypress.env("mail"),
    password: Cypress.env("password"),
  };
  cy.fazerLogin(dados);
});

it('criar usuário com sucesso', () => {
  cy.fixture('config.json').then((url) => {
    cy.fixture('body_user.json').then((dados) => {
      dados.mail = faker.internet.email();
      dados.cpf = window.criarcpf();
      cy.request({
        method: 'POST',
        url: `${url.servidor}${url.user}`,
        headers: {
          Authorization: Cypress.env('token'),
        },
        body: dados
      }).then((response) => {
        expect(response.status).to.eq(201);
        
      });
    });
  });
});