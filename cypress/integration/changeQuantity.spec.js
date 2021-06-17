describe('update quantity', () => {
  it('Change quantity on single products page and cart', () => {
    // go to product page
    cy.visit('localhost:3000/products/');
    // check if learn more buttons are visible
    cy.get('[data-cy="single-product-learn-more"]')
      .should('be.visible')
      .contains('Learn more');
    // click on "Learn more" and go to product
    cy.get('[data-cy="single-product-learn-more"]').first().click();
    // check if quantity selection is visible
    cy.get('[data-cy="quantity-input-dropdown"]', {
      timeout: 10000,
    }).should('be.visible');
    // .should('contain', 'quantity');
    // delete quantity
    cy.get('[data-cy="quantity-input-dropdown"]').clear();
    // type quantity of 5
    cy.get('[data-cy="quantity-input-dropdown"]').type('5');
    // check if add to cart button is visible
    cy.get('[data-cy="single-product-add-to-cart-button"]', {
      timeout: 10000,
    })
      .should('be.visible')
      .contains('Add to cart');
    // click on Add to cart button
    cy.get('[data-cy="single-product-add-to-cart-button"]')
      .contains('Add to cart')
      .click();
    // click on shopping bag icon in header and navigate to checkout page
    cy.get('[data-cy="navigate-to-cart"]').click();
    // check if quantity selection is visible
    cy.get('[data-cy="quantity-input-dropdown-cart"]', {
      timeout: 8000,
    }).should('be.visible');
    // delete quantity
    cy.get('[data-cy="quantity-input-dropdown-cart"]').clear();
    // type quantity of 2
    cy.get('[data-cy="quantity-input-dropdown-cart"]').type('2');
    // check if remove button is visible
    cy.get('[data-cy="remove-button-cart"]')
      .should('be.visible')
      .contains('Remove');
    // click on remove button
    cy.get('[data-cy="remove-button-cart"]').click();
  });
});
