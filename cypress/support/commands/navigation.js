const HomePage = require('../pages/HomePage');

Cypress.Commands.add('openHome', () => {
  HomePage.visit();
  HomePage.shouldBeVisible();
});
