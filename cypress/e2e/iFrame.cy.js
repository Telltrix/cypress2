/// <reference types="cypress"/>

describe('Work with iFrames', () => {
    //before faz com que o comando seja executado antes para todos os testes
    // before(() => {
        
    // })

    it('Deve preencher campo de texto', ()=> {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#frame1').then(iFrame => {
            const body = iFrame.contents().find('body');
            cy.wrap(body).find('#tfield').type('Funfou?').should('have.value', 'Funfou?');
            cy.wrap(body).find('#otherButton').click();
        });
    })

    it.only('Deve trabalhar diretamente com o frame', ()=> {
        cy.visit('https://wcaquino.me/cypress/frame.html');
            cy.get('#otherButton').click();
            cy.on('window:alert', msg =>{
                console.log(msg);
                expect(msg).to.be.equal('Click OK!');
            })
    })
    

})