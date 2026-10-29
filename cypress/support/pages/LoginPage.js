const selectors = require('../selectors');

class LoginPage {
  shouldBeVisible() {
    cy.get(selectors.login.form).should('be.visible');
    cy.contains('h2', 'Login to your account').should('be.visible');
  }

  login(email, password) {
    cy.get(selectors.login.email).type(email);
    cy.get(selectors.login.password).type(password, { log: false });
    cy.get(selectors.login.button).click();
  }

  shouldShowError(message) {
    cy.get(selectors.login.errorMessage).should('contain.text', message);
  }
}

module.exports = new LoginPage();
