describe('START Store Tests', () => {
  it('Deve ter o primeiro card de produto com o título "Dolce Shine Eau de"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the first product card contains the expected title (Dolce Shine Eau de - id 9 )
    cy.get('.card').first().find('h2').should('contain', 'Dolce Shine Eau de');
  });

  it('Deve exibir apenas 10 cards de produtos na página', () => {
    cy.visit('http://localhost:3000');

    // Verify if there are more than 0 cards on the page and if there are exactly 10 cards
    cy.get('.card').should('have.length.greaterThan', 0);
    cy.get('.card').should('have.length', 10);
    cy.get('.card').should('have.length.lessThan', 11);

    // Verify if each card contains an image, a title and a price
    cy.get('.card').each(card => {
      cy.wrap(card).find('img').should('be.visible');
      cy.wrap(card).find('h2').should('be.visible');
      cy.wrap(card).find('p').should('be.visible');
    });
  });

  it('Deve ter o último card de produto com o título "Gucci Bloom Eau de"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the last product card contains the expected title (Gucci Bloom Eau de - id 10)
    cy.get('.card').last().find('h2').should('contain', 'Gucci Bloom Eau de');
  });

  it('Deve ter o penúltimo card de produto com o título "Dior J\'adore"', () => {
    cy.visit('http://localhost:3000');

    // Verify if the second from the last product card contains the expected title (Dior J'adore - id 8)
    cy.get('.card').eq(8).find('h2').should('contain', 'Dior J\'adore');
  });

  it('Deve ter cards de produtos na ordem correta', () => {
    cy.visit('http://localhost:3000');

    // Verify if the first card contains the expected title (Dolce Shine Eau de - id 9)
    cy.get('.card').first().find('h2').should('contain', 'Dolce Shine Eau de');

    // Verify if the second card contains the expected title (Essence Mascara Lash Princess - id 1)
    cy.get('.card').eq(1).find('h2').should('contain', 'Essence Mascara Lash Princess');

    // Verify if the third card contains the expected title (Eyeshadow Palette with Mirror - id 2)
    cy.get('.card').eq(2).find('h2').should('contain', 'Eyeshadow Palette with Mirror');

    // Verify if the fourth card contains the expected title (Powder Canister - id 3)
    cy.get('.card').eq(3).find('h2').should('contain', 'Powder Canister');

    // Verify if the fifth card contains the expected title (Red Lipstick - id 4)
    cy.get('.card').eq(4).find('h2').should('contain', 'Red Lipstick');

    // Verify if the sixth card contains the expected title (Red Nail Polish - id 5)
    cy.get('.card').eq(5).find('h2').should('contain', 'Red Nail Polish');

    // Verify if the seventh card contains the expected title (Calvin Klein CK One - id 6)
    cy.get('.card').eq(6).find('h2').should('contain', 'Calvin Klein CK One');

    // Verify if the eighth card contains the expected title (Chanel Coco Noir Eau De - id 7)
    cy.get('.card').eq(7).find('h2').should('contain', 'Chanel Coco Noir Eau De');

    // Verify if the ninth card contains the expected title (Dior J'adore - id 8)
    cy.get('.card').eq(8).find('h2').should('contain', 'Dior J\'adore');

    // Verify if the last card contains the expected title (Gucci Bloom Eau de - id 10)
    cy.get('.card').last().find('h2').should('contain', 'Gucci Bloom Eau de');
  });

  it('Deve navegar até a seção "About Us" quando o link "ABOUT" for clicado', () => {
    cy.visit('http://localhost:3000');

    //  Verify if the "ABOUT" link is present and click on it
    cy.contains('ABOUT').click();

    // Verify if the URL contains "#about"
    cy.url().should('include', '#about');

    // Verify if the "About Us" section is visible
    cy.get('#about').should('be.visible');
  });

  it('Deve exibir o rodapé com o ano atual', () => {
    cy.visit('http://localhost:3000');

    // Verify if the footer is visible
    cy.get('footer').should('be.visible');

    // Verify if the footer contains the current year
    cy.get('#footer_year').should('contain', new Date().getFullYear());
  });
});
