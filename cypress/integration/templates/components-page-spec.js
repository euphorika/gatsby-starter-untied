describe('Components Page test', () => {
  it('Visit Components Page', () => {
    cy.visit('/components/')
    cy.get('main section').should('be.visible')
  })
})
