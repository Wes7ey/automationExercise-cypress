const selectors = require('../selectors');

class ProductsPage {
  shouldBeVisible() {
    cy.contains(selectors.products.title, 'All Products').should('be.visible');
    cy.get(selectors.products.productCard).should('have.length.greaterThan', 0);
  }

  openFirstProductDetail() {
    cy.get(selectors.products.viewProductLink).first().click();
  }

  search(term) {
    cy.get(selectors.products.searchInput).type(term);
    cy.get(selectors.products.searchButton).click();
  }

  shouldShowSearchResults() {
    cy.contains(selectors.products.title, 'Searched Products').should('be.visible');
    cy.get(selectors.products.productCard).should('have.length.greaterThan', 0);
  }

  addFirstProductToCart() {
    cy.get(selectors.products.productOverlay)
      .first()
      .invoke('attr', 'style', 'display:block !important; opacity:1 !important; visibility:visible !important; height:100% !important;')
      .find(selectors.products.overlayAddToCart)
      .first()
      .click();

    cy.get(selectors.products.continueShopping).click();
  }
}

module.exports = new ProductsPage();
