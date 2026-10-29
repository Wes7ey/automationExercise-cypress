const selectors = require('../selectors');

class HomePage {
  visit() {
    cy.visit('/');
  }

  shouldBeVisible() {
    cy.get(selectors.home.logo).should('be.visible');
  }

  goToSignupLogin() {
    cy.get(selectors.nav.signupLogin).click();
  }

  goToProducts() {
    cy.get(selectors.nav.products).click();
  }

  goToCart() {
    cy.get(selectors.nav.cart).click();
  }

  scrollToSubscription() {
    // O texto no DOM é "Subscription"; o CSS aplica uppercase visualmente
    cy.contains(selectors.home.subscriptionTitle, 'Subscription')
      .scrollIntoView()
      .should('be.visible');
  }

  subscribe(email) {
    cy.get(selectors.home.subscriptionEmail).type(email);
    cy.get(selectors.home.subscriptionButton).click();
  }
}

module.exports = new HomePage();
