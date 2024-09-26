describe('Enter Lazada Website when language is Thai', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://www.lazada.co.th/', {timeout : 120000});
  });

  it('Change language to English and verify menu items', () => {

    cy.url().should('include', 'lazada.co.th');

    // Ensure the language switch button is visible
    cy.get('#topActionSwitchLang').should('be.visible');

    // Change Language to Thai
    cy.get('#topActionSwitchLang').click();
    cy.get('[data-lang="th"]').click();

    // Verify the language switch button now displays 'เปลี่ยนภาษา' (Thai)
    cy.get('#topActionSwitchLang').within(() => {
      cy.contains('change language').should('exist');
    });

    // Verify other menu items are now in Thai
    cy.get('#topActionFeedback').within(() => {
      cy.contains('ข้อเสนอแนะ').should('exist');
    });
    cy.get('#topActionDownload').within(() => {
      cy.contains('ช้อปคุ้มกว่าเดิมบนแอป').should('exist');
    });
    cy.get('#topActionSell').within(() => {
      cy.contains('ขายสินค้ากับลาซาด้า').should('exist');
    });
    cy.get('#topActionCustomCare').within(() => {
      cy.contains('ช่วยเหลือ').should('exist');
    });
    cy.get('#topActionTrack').within(() => {
      cy.contains('ติดตามสินค้า').should('exist');
    });
    cy.get('#anonLogin').within(() => {
      cy.contains('ลงชื่อเข้าใช้').should('exist');
    });
    cy.get('#anonSignup').within(() => {
      cy.contains('สมัครสมาชิก').should('exist');
    });

    // Change Language to English
    cy.get('#topActionSwitchLang').click();
    cy.get('[data-lang="en"]').click();

    // Verify the language switch button now displays 'CHANGE LANGUAGE'
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
