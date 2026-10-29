const HomePage = require('../../support/pages/HomePage');
const selectors = require('../../support/selectors');
const { buildUser } = require('../../support/utils/testData');

describe('Home', () => {
  it('TC10 - Verify Subscription in home page', () => {
    const { email } = buildUser();

    cy.openHome();
    HomePage.scrollToSubscription();
    HomePage.subscribe(email);

    cy.get(selectors.home.subscriptionSuccess)
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  });
});
