const HomePage = require('../../support/pages/HomePage');
const ProductsPage = require('../../support/pages/ProductsPage');
const CartPage = require('../../support/pages/CartPage');
const selectors = require('../../support/selectors');
const { buildUser } = require('../../support/utils/testData');
const payment = require('../../fixtures/payment.json');

// Fluxo compartilhado: adiciona produto, vai ao carrinho e finaliza o pedido
const placeOrder = () => {
  ProductsPage.addFirstProductToCart();
  HomePage.goToCart();
  CartPage.proceedToCheckout();
  CartPage.shouldShowAddressDetails();
  CartPage.placeOrder(payment.comment);
  CartPage.fillPayment(payment);
  CartPage.shouldShowOrderPlaced();
};

describe('Finalização de pedido', () => {
  it('TC15 - Place Order: Register before Checkout', () => {
    const user = buildUser();

    cy.registerUser(user);
    cy.get(selectors.nav.products).click();
    placeOrder();

    cy.deleteAccount();
  });

  it('TC16 - Place Order: Login before Checkout', () => {
    const user = buildUser();

    cy.registerUser(user);
    cy.logoutUser();

    cy.loginUser(user.email, user.password);
    cy.get(selectors.nav.products).click();
    placeOrder();

    cy.deleteAccount();
  });
});
