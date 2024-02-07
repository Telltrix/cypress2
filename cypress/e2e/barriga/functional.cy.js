/// <reference types="cypress-xpath"/>
import loc from '../../support/locators'
import '../../support/commandsInvoice'

describe('Should test at functional level', () => {
    
    
    beforeEach(function () {
        cy.fixture('login').as('user').then(() => {
            cy.cmdLogin(this.user.loginName, this.user.password);    
        })
    })
    //testes
    it('Creating invoice', ()=> {
        cy.resetINVC();
        cy.acessAccountSettings();
        cy.createAccount('Fatura teste');
        cy.verifyToast('Conta inserida com sucesso!');
    })

    it('Update invoice', ()=> {
        cy.acessAccountSettings();
        cy.xpath(loc.INVOICE.XP_INVC_UPDATE_BTN).click();
        cy.get(loc.INVOICE.INVC_TEXT_NAME).clear().type('Fatura alterada');
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click();
        cy.verifyToast('Conta atualizada com sucesso!');
    })

    it('Check invoice name', ()=> {
        cy.acessAccountSettings();
        cy.createAccount('Fatura alterada');
        cy.verifyToast('code 400');
    })

    it('Should create a transsaction', () => {
        cy.get(loc.MENU.BTN_SHIFT).click();
        cy.get(loc.SHIFT_SCREEN.DESC).type('Desc');
        cy.get(loc.SHIFT_SCREEN.VALUE).type('123');
        cy.get(loc.SHIFT_SCREEN.INTERESS).type('Inter');
        cy.get(loc.SHIFT_SCREEN.BTN_STATUS).click();
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click();
        cy.verifyToast('sucesso');
        cy.get(loc.SUMMARY.LIST_NMBR).should('have.length', 7);
        cy.xpath(loc.SUMMARY.XP_INVC_DSC_VALUE).should('exist');
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.BTN_HOME).click();
        cy.xpath(loc.HOME_SCREEN.FN_XP_HOME_DSC_INVC('Conta', '123')).should('exist');
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.BTN_STATEMENT).click();
        cy.xpath(loc.SUMMARY.FN_XP_BTN_DELETE('Desc')).click();
        cy.verifyToast('sucesso');
    })
})