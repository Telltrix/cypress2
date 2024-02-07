// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('clickAlert', (buttonLocator, message)=> {
    cy.get(buttonLocator).click();
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal(message);
    })
})

Cypress.Commands.add('cmdLogin', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/');
    cy.get(loc.LOGIN.USER).type(user);
    cy.get(loc.LOGIN.PASSWORD).type(passwd);
    cy.xpath(loc.LOGIN.XP_BTN_LOGIN).click();
    cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'Bem vindo');
})


Cypress.Commands.add('resetINVC', ()=> {
    cy.get(loc.MENU.BTN_MENU).click();
    cy.get(loc.MENU.BTN_MENU_RESET).click();
})

Cypress.Commands.add('getToken', ()=> {
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body: {
            email: "telltrix@hotmail.com",
            redirecionar: false,
            senha: "204402"
        }
    }).its('body.token').should('not.be.empty')
    .then(token => {
        Cypress.env('token', token)
        return token;
    })
})

Cypress.Commands.add('resetRest', ()=> {
    cy.getToken().then(token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200)
    })
})

Cypress.Commands.add('getAccountByName', name => {
    cy.getToken().then(token => {
        cy.request({
            url:'/contas',
            method: 'GET',
            headers: { Authorization: `JWT ${token}`},
            body: {
                nome: name
            }
        }).then(res => {
            return res.body[0].id
        })
    })
})

Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    if (options.length === 1) {
        if (Cypress.env('token')) {
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
        }
    }
    return originalFn(...options)
})
