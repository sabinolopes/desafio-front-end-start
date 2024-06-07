describe('START Store Tests', () => {
  it('Should have the first product card with the title "Dolce Shine Eau de"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the first product card contains the expected title (Dolce Shine Eau de - id 9 )
    cy.get('.card').first().find('h2').should('contain', 'Dolce Shine Eau de');
  });

  it('Should display 10 product cards on the page', () => {
    cy.visit('http://localhost:3000');

    // Verify if there are more than 0 cards on the page and if there are exactly 10 cards
    cy.get('.card').should('have.length.greaterThan', 0);
    cy.get('.card').should('have.length', 10);

    // Verify if each card contains an image, a title and a price
    cy.get('.card').each(card => {
      cy.wrap(card).find('img').should('be.visible');
      cy.wrap(card).find('h2').should('be.visible');
      cy.wrap(card).find('p').should('be.visible');
    });
  });

  it('Should have the last product card with the title "Gucci Bloom Eau de"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the last product card contains the expected title (Gucci Bloom Eau de - id 10)
    cy.get('.card').last().find('h2').should('contain', 'Gucci Bloom Eau de');
  });

  it('Should have the second from the last product card with the title "Dior J\'adore"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the second from the last product card contains the expected title (Dior J'adore - id 8)
    cy.get('.card').eq(8).find('h2').should('contain', 'Dior J\'adore');
  });

  it('Should navigate to the About section when "ABOUT" link is clicked', () => {
    cy.visit('http://localhost:3000');

    //  Verify if the "ABOUT" link is present and click on it
    cy.contains('ABOUT').click();

    // Verify if the URL contains "#about"
    cy.url().should('include', '#about');

    // Verify if the "About Us" section is visible
    cy.get('#about').should('be.visible');
  });

  it('Should display the footer with the current year', () => {
    cy.visit('http://localhost:3000');

    // Verify if the footer is visible
    cy.get('footer').should('be.visible');

    // Verify if the footer contains the current year
    cy.get('#footer_year').should('contain', new Date().getFullYear());
  });
});
