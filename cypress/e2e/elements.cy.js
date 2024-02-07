/// <reference types="cypress"/>

describe('Work with basic elements', () => {
    //before faz com que o comando seja executado antes para todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    //beforeEach faz com que o comando seja executado antes para cada um dos testes.
    beforeEach(() => {
        cy.reload();
    })

    it('Text', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html');
        //cy.get Pega o que esta dentro da tag "Body"
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        //.facilAchar o "." determina que estamos procurando uma classe CSS
        cy.get('.facilAchar').should('contain', 'Cuidado');
        //have.text procura o texto completo
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })
    it('Links', () => {
       //cy.visit('https://wcaquino.me/cypress/componentes.html');
        // [href="#"] é a referencia do link na page
        cy.get('[href="#"]').click();
        //#resultado o "#" determina que estamos procurando em um id
        cy.get('#resultado').should('have.text', 'Voltou!');
        //cy.reload recarrega a page
        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        //cy.contains pega elemento de texto que contém o texto referente
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    it('TextFields', () => {
        // É necessário utilizar o "have.value" para text fields
        cy.get('#formNome').type('Cypress Test').should('have.value', 'Cypress Test');
        //É necessário por "\\" para o cypress considerar algum id utilizando ":"
        cy.get('#elementosForm\\:sugestoes').type('textarea').should('have.value', 'textarea');
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???');
        cy.get('[data-cy="dataSobrenome"]').type('Teste12345{backspace}{backspace}');
        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}Acerto', {delay:200}).should('have.value', 'Acerto');
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem').click().should('be.checked');
        cy.get('#formSexoMasc').should('be.not.checked');
        cy.get('[name=formSexo]').should('have.length', 2);
    })

    it('CheckBox', () => {
        cy.get('#formComidaCarne').click().should('be.checked');
        cy.get('#formComidaFrango').should('be.not.checked');
        cy.get('[name=formComidaFavorita]').should('have.length', 4).click({multiple:true});
    })
    //Testar comboBox
    it.only('ComboBox', () => {
        cy.get('[data-test="dataEscolaridade"]').select('2o grau completo').should('have.value', '2graucomp');
       // cy.get('[data-test="dataEscolaridade"] option').should('have.length', 8);
        // cy.get('[data-test=dataEscolaridade] option').then($arr =>{
        //     const values = [];
        //     $arr.each(function (){
        //         values.push(this.innerHTML);
        //     })
        //     expect(values).to.include.members(["Superior", "Mestrado"]);
        // })

    })
    //Testar combos multiplos
    it('Combo multiple', () => {
        cy.get('[data-testid=dataEsportes]').select(['natacao','Corrida', 'nada']);
        //cy.get('[data-testid=dataEsportes]').then($el =>{
            //expect($el.val()).to.be.deep.equal(['natacao','Corrida', 'nada']);
          //  expect($el.val()).to.have.length(3);
        //})
        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada']);
        cy.get('[data-testid=dataEsportes]').invoke('val').should('have.length', 3);
    })
    
})