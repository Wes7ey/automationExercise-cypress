const HomePage = require('../../support/pages/HomePage');
const SignupPage = require('../../support/pages/SignupPage');
const { buildUser } = require('../../support/utils/testData');

describe('Cadastro de usuário', () => {
  it('TC1 - Register User', () => {
    const user = buildUser();

    cy.registerUser(user);
    cy.deleteAccount();
  });

  it('TC5 - Register User with existing email', () => {
    const user = buildUser();

    cy.registerUser(user);
    cy.logoutUser();

    HomePage.goToSignupLogin();
    SignupPage.shouldBeVisible();
    SignupPage.startSignup(user.name, user.email);
    SignupPage.shouldShowExistingEmailError();

    cy.loginUser(user.email, user.password);
    cy.deleteAccount();
  });
});
