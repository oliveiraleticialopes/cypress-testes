import { faker } from '@faker-js/faker';

before(() => {
  cy.fixture('body_login.json').then((dados) => {
    cy.fazerLogin(dados);
  });
});

it('criar usuário', () => {
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
        const iduser = response.body.user._id;

      });
    });
  });
});