const selectors = require('../selectors');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');

Cypress.Commands.add('registerUser', (user) => {
  cy.openHome();
  HomePage.goToSignupLogin();
  SignupPage.shouldBeVisible();
  SignupPage.startSignup(user.name, user.email);
  SignupPage.fillAccountInformation(user);

  cy.get(selectors.accountResult.created).should('be.visible');
  cy.get(selectors.accountResult.continue).click();
  cy.get(selectors.nav.loggedInAs).should('be.visible');
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.openHome();
  HomePage.goToSignupLogin();
  LoginPage.shouldBeVisible();
  LoginPage.login(email, password);
  cy.get(selectors.nav.loggedInAs).should('be.visible');
});

Cypress.Commands.add('logoutUser', () => {
  cy.get(selectors.nav.logout).click();
  cy.url().should('include', '/login');
});

Cypress.Commands.add('deleteAccount', () => {
  cy.get(selectors.nav.deleteAccount).click();
  cy.get(selectors.accountResult.deleted).should('be.visible');
  cy.get(selectors.accountResult.continue).click();
});
