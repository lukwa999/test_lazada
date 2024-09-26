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
        
      // Check the first 4 product cards
      for (let i = 0; i < 4; i++) {
        cy.get(`[data-qa-locator="product-item"][data-listno="${i}"]`).within(() => {
        // Check for product name
        cy.get('a[title]').invoke('text').then((productName) => {
            cy.log(`Product Name: ${productName}`);
            // Adjust the expected product name assertion if needed
            expect(productName).to.exist; // Check if product name exists
        });

        // Check for product price
        cy.get('.ooOxS').invoke('text').then((price) => {
            cy.log(`Product Price: ${price}`);
            expect(price).to.match(/฿\d+(\.\d{2})?/); // Check if the price matches the format
        });

        // Check for product image
        cy.get('img[alt]').invoke('attr', 'src').then((imageSrc) => {
            cy.log(`Product Image Source: ${imageSrc}`);
            expect(imageSrc).to.include('lazcdn.com'); // Check if the image source is valid
        });
        });
      }
    });
});
  