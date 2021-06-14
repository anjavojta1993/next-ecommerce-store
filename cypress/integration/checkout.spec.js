describe('Checkout flow from start to end', () => {
  it('can add products, go to checkout and is forwarded to the thank you page', () => {
    // go to product page
    cy.visit('localhost:3000/products/');
    // check if learn more buttons are visible
    cy.get('[data-cy="single-product-learn-more"]').should('be.visible');
    // click on "Learn more" and go to product
    cy.get('[data-cy="single-product-learn-more"]').first().click();
    // check if add to cart button is visible
    cy.get('[data-cy="single-product-add-to-cart-button"]').should(
      'be.visible',
    );
    // click on Add to cart button
    cy.get('[data-cy="single-product-add-to-cart-button"]').click();
    // click on shopping bag icon in header
    cy.get('[data-cy="navigate-to-cart"]').click();
    // check if checkout button is visible
    cy.get('[data-cy="checkout-button"]').should('be.visible');
    // click on checkout button
    cy.get('[data-cy="checkout-button"]').click();
    // fill out form on checkout page
    cy.get('[data-cy="full-name"]').type('Anja Vojta');
    cy.get('[data-cy="email"]').type('anja.vojta@gmail.com');
    cy.get('[data-cy="address"]').type('Nußdorferstraße 4');
    cy.get('[data-cy="city"]').type('Vienna');
    cy.get('[data-cy="state"]').type('NY');
    cy.get('[data-cy="zip"]').type('11111');
    cy.get('[data-cy="cname"]').type('Anja Vojta');
    cy.get('[data-cy="ccnum"]').type('1111222233334444');
    cy.get('[data-cy="expmonth"]').type('September');
    cy.get('[data-cy="expyear"]').type('2022');
    cy.get('[data-cy="cvv"]').type('111');
    // check if pay now button is visible
    cy.get('[data-cy="pay-button"]').should('be.visible');
    // click on pay now button and get redirected to thank you page
    cy.get('[data-cy="pay-button"]').click();
  });
});
