describe('First test', function () {
  it('check if the app works', function () {
    cy.visit('/')
  })

  it('test categories', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('test logo redirects to home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('not login users show login if they try to go to FAVS page', function () {
    cy.visit('/login')
    cy.get('form').should('have.length', 2)
  })
})
