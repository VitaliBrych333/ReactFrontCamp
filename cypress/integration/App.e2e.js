describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:8080');
    // cy.wait(3000) // if didn't get the data - time for loading data
    cy.get('h1')
      .should('have.text', 'Find your movie');
  });

  it('should have a header', () => {
    cy.visit('/');
    cy.get('h1')
      .should('have.text', 'Find your movie');
  });

  it('should have a header with <p>Search by</p>', () => {
    cy.visit('http://localhost:8080');
    cy.get('h1').get('p')
      .should('have.text', 'Search bySort by');
  });

  it('should have a div in header with <p>Sort by</p>', () => {
    cy.visit('http://localhost:8080');
    cy.get('h1').get('.count-movie')
      .should('have.text', 'Sort byRelease dateRating');
  });

  it('should shows the film Wild Card', function() {
    cy.visit('http://localhost:8080/');
    cy.get('input').type('Card');
    cy.get('.input-group-append button').click();
    cy.get('section .card-body a')
      .should('have.text', 'Wild Card');
  })

  it('should url with parameters', function() {
    cy.visit('http://localhost:8080/');
    cy.get('input').type('Card');
    cy.get('.input-group-append button').click();
    cy.get('section .card-body a').click();
    cy.url()
      .should('include', '/movies/265208');
  })

  it('should has the correct url and the counting results', function() {
    cy.visit('http://localhost:8080/');
    cy.get('input').type('Card');
    cy.get('.input-group-append button').click();
    cy.get('section .card-body .card-text button[value="Drama"]').click();
    cy.url().should('eq', 'http://localhost:8080/');
    cy.get('.card').should('have.length', 10);
  })

  it('should raiting works correctly', function() {
    cy.visit('http://localhost:8080/');
    cy.get('input').type('Card');
    cy.get('.input-group-append button').click();
    cy.get('section .card-body a').click();
    cy.get('span > a').click();
    cy.get('.count-movie .btn-secondary').click();
    cy.get('section .card').get('span').first().
      should('have.text', '2017');
  })

  it('should release works correctly', function() {
    cy.get('.count-movie .btn-secondary').click();
    cy.get('section .card').get('span').first().
      should('have.text', '2018');
  })
});

