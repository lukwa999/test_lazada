describe('Verify that the user can search when the keywords is "baby toys""', () => {

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://www.lazada.co.th/', {timeout : 120000});
    });
  
    it('Verify Related keywords', () => {
        
      // Verify Url  
      cy.url().should('include', 'lazada.co.th');
  
      // Verify Search Bars is Empty
      cy.get('#q').should('have.value', '');
    
      // Enter 'baby toys' in Search Bar and Verify
      cy.get('#q').type('baby toys{enter}')
      cy.wait(2000);
        
      // Get the element that contains the number of items found
      cy.get('.M4pDu').within(() => {
      // Check that the text contains "items found for" and "baby toys"
        cy.contains('items found for').should('exist');
        cy.contains('baby toys').should('exist');
      });
    });
});
  