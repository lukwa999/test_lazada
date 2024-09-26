describe('Enter Lazada Website when language is English', () => {

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://www.lazada.co.th/', {timeout : 120000});
    });
  
    it('Verify menu items', () => {
  
      cy.url().should('include', 'lazada.co.th');
  
      // Verify the language switch button now displays 'เปลี่ยนภาษา' (Thai)
      cy.get('#topActionSwitchLang').within(() => {
        cy.contains('เปลี่ยนภาษา').should('exist');
      });
  
      // Verify other menu items are now in English
      cy.get('#topActionFeedback').within(() => {
        cy.contains('feedback').should('exist');
      });
      cy.get('#topActionDownload').within(() => {
        cy.contains('SAVE MORE ON APP').should('exist');
      });
      cy.get('#topActionSell').within(() => {
        cy.contains('sell on lazada').should('exist');
      });
      cy.get('#topActionCustomCare').within(() => {
        cy.contains('CUSTOMER CARE').should('exist');
      });
      cy.get('#topActionTrack').within(() => {
        cy.contains('Track my order').should('exist');
      });
      cy.get('#anonLogin').within(() => {
        cy.contains('login').should('exist');
      });
      cy.get('#anonSignup').within(() => {
        cy.contains('signup').should('exist');
      });
    });
  });
  