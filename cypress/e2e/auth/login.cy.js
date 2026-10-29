const LoginPage = require('../../support/pages/LoginPage');
const HomePage = require('../../support/pages/HomePage');
const selectors = require('../../support/selectors');
const { buildUser } = require('../../support/utils/testData');
const invalidLogin = require('../../fixtures/invalid-login.json');

describe('Login e logout', () => {
  const user = buildUser();

  it('TC2 - Login User with correct email and password', () => {
    cy.registerUser(user);
    cy.logoutUser();

    cy.loginUser(user.email, user.password);
    cy.contains('Logged in as').should('be.visible');

    cy.deleteAccount();
  });

  it('TC3 - Login User with incorrect email and password', () => {
    HomePage.visit();
    HomePage.goToSignupLogin();
    LoginPage.shouldBeVisible();

    LoginPage.login(invalidLogin.email, invalidLogin.password);
    LoginPage.shouldShowError('Your email or password is incorrect!');
  });

  it('TC4 - Logout User', () => {
    cy.registerUser(user);
    cy.logoutUser();

    cy.loginUser(user.email, user.password);
    cy.get(selectors.nav.loggedInAs).should('be.visible');

    cy.logoutUser();
    cy.get(selectors.login.form).should('be.visible');

    cy.loginUser(user.email, user.password);
    cy.deleteAccount();
  });
});
