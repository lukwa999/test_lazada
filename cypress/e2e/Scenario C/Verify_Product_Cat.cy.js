describe('Verify products are related when user search for keywords', () => {

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://www.lazada.co.th/', {timeout : 120000});
    });
  
    it('Verify Category', () => {
        
      // Verify Url  
      cy.url().should('include', 'lazada.co.th');
  
      // Verify Search Bars is Empty
      cy.get('#q').should('have.value', '');
    
      // Enter 'baby toys' in Search Bar and Verify
      cy.get('#q').type('baby toys{enter}')
      cy.wait(2000);
        
      cy.get(`[data-qa-locator="product-item"][data-listno="0"]`).within(() => {

        // Check for product image
        cy.get('img[alt]').click();
      });

      // Check the breadcrumb categories
      cy.get('#J_breadcrumb_list').within(() => {
        cy.get('.breadcrumb_item_text').eq(0).invoke('text').then((text) => {
          expect(text.trim()).to.equal('Toys & Games'); // Check the first breadcrumb item
        });
        cy.get('.breadcrumb_item_text').eq(1).invoke('text').then((text) => {
          expect(text.trim()).to.be.oneOf(['Learning & Education', 'Baby & Toddler Toys']); // Check the second breadcrumb item
        });
      });
      
    });
});
  