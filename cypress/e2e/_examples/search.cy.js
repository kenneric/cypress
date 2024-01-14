describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://google.com')
      cy.get('textarea[title="Search"]').type(Cypress.env('search'));
    })
  })