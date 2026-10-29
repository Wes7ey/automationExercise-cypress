const selectors = require('../selectors');

class SignupPage {
  shouldBeVisible() {
    cy.contains('h2', 'New User Signup!').should('be.visible');
  }

  startSignup(name, email) {
    cy.get(selectors.signup.name).type(name);
    cy.get(selectors.signup.email).type(email);
    cy.get(selectors.signup.button).click();
  }

  fillAccountInformation(user) {
    cy.contains('h2', 'Enter Account Information').should('be.visible');

    cy.get(selectors.accountInfo.title(user.title)).check();
    cy.get(selectors.accountInfo.password).type(user.password, { log: false });
    cy.get(selectors.accountInfo.days).select(user.day);
    cy.get(selectors.accountInfo.months).select(user.month);
    cy.get(selectors.accountInfo.years).select(user.year);
    cy.get(selectors.accountInfo.newsletter).check();
    cy.get(selectors.accountInfo.partnerOffers).check();

    cy.get(selectors.accountInfo.firstName).type(user.firstName);
    cy.get(selectors.accountInfo.lastName).type(user.lastName);
    cy.get(selectors.accountInfo.company).type(user.company);
    cy.get(selectors.accountInfo.address).type(user.address);
    cy.get(selectors.accountInfo.country).select(user.country);
    cy.get(selectors.accountInfo.state).type(user.state);
    cy.get(selectors.accountInfo.city).type(user.city);
    cy.get(selectors.accountInfo.zipcode).type(user.zipcode);
    cy.get(selectors.accountInfo.mobile).type(user.mobile);

    cy.get(selectors.accountInfo.createAccount).click();
  }

  shouldShowExistingEmailError() {
    cy.get(selectors.signup.errorMessage).should('contain.text', 'Email Address already exist!');
  }
}

module.exports = new SignupPage();
