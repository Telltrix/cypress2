/// <reference types="cypress"/>

describe('Work with alerts', () => {
    //Validando git
    //before faz com que o comando seja executado antes para todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    //beforeEach faz com que o comando seja executado antes para cada um dos testes
    beforeEach(() => {
        cy.reload();
    })

    it.only('alert', ()=> {
        // cy.get('#alert').click();
        // cy.on('window:alert', msg =>{
        //     console.log(msg);
        //     expect(msg).to.be.equal('Alert Simples');
        // })
        cy.clickAlert('#alert', 'Alert Simples');//Adicionado comandos no file commands

    })

    it('alert com mock', ()=> {
        //Stub = mock, as = alias troca nome de elemento
        const stub = cy.stub().as('alerta');
        cy.on('window:alert', stub);
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples');
        });
    })

    it('Confirm', ()=> {
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples');
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado');
        })
        cy.get('#confirm').click();

    })

    it('Deny', ()=> {
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples');
            return false;
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado');
        })
        cy.get('#confirm').click();

    })

    it('Prompt', ()=> {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('47');
        })
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Era 47?');
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal(':D');
        })
        cy.get('#prompt').click();

    })

    it('Validando msgs', ()=> {
        const stub = cy.stub().as('alerta');
        
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'));

        cy.get('#formNome').type('Wagner');
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'));

        cy.get('[data-cy=dataSobrenome]').type('Aquino');
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'));

        cy.get('#formSexoMasc').click();
        cy.get('#formCadastrar').click();
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');


    })

})