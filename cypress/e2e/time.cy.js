/// <reference types="cypress-xpath"/>

describe('Work with date', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    
    it('Going back to the past', ()=> {
        const dt = new Date(2012, 3, 10, 15, 23, 50);
        cy.clock(dt.getTime());//Seta a data/hora do sistema
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain', '10/04/2012');           
    })

    it.only('Goes to the future', ()=> {
        cy.clock();
        cy.tick(5000);//Seta o tempo no futuro
        cy.get('#buttonTimePassed').click();
        cy.get('#resultado > span').invoke('text').then(t => {
            const number = parseInt(t)
            cy.wrap(number).should('gte', 5000)
        })
    })
})