describe('update quantity', () => {
  it('Change quantity on single products page and cart', () => {
    // go to product page
    cy.visit('localhost:3000/products/');
    // check if learn more buttons are visible
    cy.get('[data-cy="single-product-learn-more"]').should('be.visible');
    // click on "Learn more" and go to product
    cy.get('[data-cy="single-product-learn-more"]').first().click();
    // check if quantity selection is visible
    cy.get('[data-cy="quantity-input-dropdown"]').should('be.visible');
    // select quantity of 5
    cy.get('[data-cy="quantity-input-dropdown"]').type('{downarrow}');
    // check if add to cart button is visible
    cy.get('[data-cy="single-product-add-to-cart-button"]').should(
      'be.visible',
    );
    // click on Add to cart button
    cy.get('[data-cy="single-product-add-to-cart-button"]').click();
    // click on shopping bag icon in header and navigate to checkout page
    cy.get('[data-cy="navigate-to-cart"]').click();
    // check if quantity selection is visible
    cy.get('[data-cy="quantity-input-dropdown-cart"]').should('be.visible');
    // select quantity of 2
    cy.get('[data-cy="quantity-input-dropdown-cart"]').trigger('pointerdown', {
      which: 2,
    });
    // check if remove button is visible
    cy.get('[data-cy="remove-button-cart"]').should('be.visible');
    // click on remove button
    cy.get('[data-cy="remove-button-cart"]').click();
  });
});
