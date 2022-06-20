export {}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Load the given page and assert element is visible.
       * @example cy.smoketest('http://example.com', '#header')
       */
      smoketest(url: string, element: string): Chainable<Element>
    }
  }
}
