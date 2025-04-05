
  
function deletarUsuario(id, url) {
    return cy.request({
      method: 'DELETE',
      url: `${url.servidor}${url.user}/${id}`,
      headers: {
        Authorization: Cypress.env('token'),
      }
    });
}

function criarcpf() {
    let resultado = '';
    for (let i = 0; i < 11; i++) {
      resultado += Math.floor(Math.random() * 10);
    }
    return resultado;
}
  
window.criarcpf = criarcpf;

  
