describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/very-first-blog-post/')
    cy.get('h1').should('be.visible')
    cy.get('h2').should('be.visible')
    cy.get('div').should('be.visible')
    cy.get('img').should('be.visible')
  })
})
