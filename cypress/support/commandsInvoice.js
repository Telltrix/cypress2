import loc from './locators'

Cypress.Commands.add('acessAccountSettings', () => {
    cy.get(loc.MENU.BTN_MENU).click();
    cy.get(loc.MENU.BTN_MENU_INVOICE).click();
})

Cypress.Commands.add('createAccount', accountName => {
    cy.get(loc.INVOICE.INVC_NAME).type(accountName);
    cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click();
})

  Cypress.Commands.add('verifyToast', toastMsn => {
    cy.get(loc.MESSAGE.MSG_TOAST).should('contain', toastMsn);
    cy.get(loc.MESSAGE.BTN_CLOSE_TOAST).click({ multiple: true });
})