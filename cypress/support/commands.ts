Cypress.Commands.add('smoketest', (url: string, element: string) => {
  cy.visit(url).get(element).should('be.visible')
})
