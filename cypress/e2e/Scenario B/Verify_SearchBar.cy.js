describe('Verify related keywords when user is search keywords "baby toys"', () => {

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
      cy.get('#q').type('baby toys').should('have.value', 'baby toys');
      cy.wait(2000);
    
      // Verify Related Keywords are displayed
      // Get all suggestions within the pop-up
      cy.get('.search-box__popup--3Pf1 .suggest-list--3Tm8 a').each(($el, index, $list) => {
        // Check that each suggestion contains the keyword "baby toys"
        cy.wrap($el).find('.suggest-item-content--20px span').then(($span) => {
          const suggestionText = $span.text().toLowerCase(); // Convert text to lowercase for case-insensitive comparison
          expect(suggestionText).to.include('baby toys'); // Check that it includes the keyword "baby toys"
        });
  
        // log the suggestion
        cy.wrap($el).find('.suggest-item-content--20px span').then(($span) => {
          const suggestionText = $span.text();
          cy.log(`Suggestion ${index + 1}: ${suggestionText}`);
        });
      });
    });
  });
  