const HomePage = require('../../support/pages/HomePage');
const ProductsPage = require('../../support/pages/ProductsPage');
const selectors = require('../../support/selectors');
const products = require('../../fixtures/products.json');

describe('Produtos', () => {
  beforeEach(() => {
    cy.openHome();
  });

  it('TC8 - Verify All Products and product detail page', () => {
    HomePage.goToProducts();
    ProductsPage.shouldBeVisible();

    ProductsPage.openFirstProductDetail();
    cy.get(selectors.products.detailName).should('be.visible');
    cy.contains(selectors.products.detailInfo, 'Category:').should('be.visible');
    cy.contains(selectors.products.detailInfo, 'Availability:').should('be.visible');
    cy.contains(selectors.products.detailInfo, 'Condition:').should('be.visible');
    cy.contains(selectors.products.detailInfo, 'Brand:').should('be.visible');
  });

  it('TC9 - Search Product', () => {
    HomePage.goToProducts();
    ProductsPage.shouldBeVisible();

    ProductsPage.search(products.searchTerm);
    ProductsPage.shouldShowSearchResults();
  });
});
