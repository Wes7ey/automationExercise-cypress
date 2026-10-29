const selectors = require('../selectors');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');

// Cadastra o usuário pela UI. Termina logado na home.
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

// Faz login pela UI a partir da home.
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

// Exclui a conta. Precisa estar logado.
Cypress.Commands.add('deleteAccount', () => {
  cy.get(selectors.nav.deleteAccount).click();
  cy.get(selectors.accountResult.deleted).should('be.visible');
  cy.get(selectors.accountResult.continue).click();
});
