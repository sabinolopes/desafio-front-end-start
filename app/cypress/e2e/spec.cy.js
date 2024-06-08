const products = [
  'Dolce Shine Eau de',
  'Essence Mascara Lash Princess',
  'Eyeshadow Palette with Mirror',
  'Powder Canister',
  'Red Lipstick',
  'Red Nail Polish',
  'Calvin Klein CK One',
  'Chanel Coco Noir Eau De',
  'Dior J\'adore',
  'Gucci Bloom Eau de'
]

const url = 'http://localhost:3000';

describe('START Store Tests', () => {
  it('Deve ter o primeiro card de produto com o título "Dolce Shine Eau de"', () => {
    cy.visit(url);

    // Verify if the first product card contains the expected title (Dolce Shine Eau de - id 9 )
    cy.get('.card').first().find('h2').should('contain', 'Dolce Shine Eau de');
  });

  it('Deve exibir apenas 10 cards de produtos na página', () => {
    cy.visit(url);

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
    cy.visit(url);

    // Verify if the last product card contains the expected title (Gucci Bloom Eau de - id 10)
    cy.get('.card').last().find('h2').should('contain', 'Gucci Bloom Eau de');
  });

  it('Deve ter o penúltimo card de produto com o título "Dior J\'adore"', () => {
    cy.visit(url);

    // Verify if the second from the last product card contains the expected title (Dior J'adore - id 8)
    cy.get('.card').eq(8).find('h2').should('contain', 'Dior J\'adore');
  });

  it('Deve ter cards de produtos na ordem correta', () => {
    cy.visit(url);

    cy.get('.card').each((card, index) => {
      // Verify if the card title is the expected one
      cy.wrap(card).find('h2').should('contain', products[index]);
    });
  });

  it('Deve navegar até a seção "About Us" quando o link "ABOUT" for clicado', () => {
    cy.visit(url);

    //  Verify if the "ABOUT" link is present and click on it
    cy.contains('ABOUT').click();

    // Verify if the URL contains "#about"
    cy.url().should('include', '#about');

    // Verify if the "About Us" section is visible
    cy.get('#about').should('be.visible');
  });

  it('Deve exibir o rodapé com o ano atual', () => {
    cy.visit(url);

    // Verify if the footer is visible
    cy.get('footer').should('be.visible');

    // Verify if the footer contains the current year
    cy.get('#footer_year').should('contain', new Date().getFullYear());
  });
});
