describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render the app', () => {
    cy.get('#root').should('exist')
  })
})