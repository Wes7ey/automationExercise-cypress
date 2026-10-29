const selectors = require('../selectors');

class CartPage {
  proceedToCheckout() {
    cy.get(selectors.cart.proceedToCheckout).click();
  }

  shouldShowAddressDetails() {
    cy.get(selectors.cart.addressDetails).should('be.visible');
  }

  placeOrder(comment) {
    cy.get(selectors.cart.commentBox).type(comment);
    cy.get(selectors.cart.placeOrder).click();
  }

  fillPayment(payment) {
    cy.get(selectors.cart.nameOnCard).type(payment.nameOnCard);
    cy.get(selectors.cart.cardNumber).type(payment.cardNumber);
    cy.get(selectors.cart.cvc).type(payment.cvc);
    cy.get(selectors.cart.expiryMonth).type(payment.expiryMonth);
    cy.get(selectors.cart.expiryYear).type(payment.expiryYear);
    cy.get(selectors.cart.payAndConfirm).click();
  }

  shouldShowOrderPlaced() {
    cy.get(selectors.cart.orderPlaced).should('contain.text', 'Order Placed!');
  }
}

module.exports = new CartPage();
