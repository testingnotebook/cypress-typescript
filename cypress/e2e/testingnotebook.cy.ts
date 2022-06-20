describe('site loads', () => {
  const url: string = 'https://testingnotebook.com'
  const element: string = '.site-title'

  it('should load home page', () => {
    cy.smoketest(url, element)
  })
})
