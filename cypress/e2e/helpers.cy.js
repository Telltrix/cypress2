///<reference types="cypress"/>

describe('Helpers...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    beforeEach(() => {
        cy.reload();
    })

    it('Wrap', () => {
        //criando objeto
        const obj = {nome: 'User', idade: 20};
        expect(obj).to.have.property('nome');
        // o "obj" não conhece o "should", somente o cypress consegue interpretar ele.
        //obj.should('have.property', 'nome');
        //Porém utilizando o Wrap o "obj" é interpretado no cypress
        cy.wrap(obj).should('have.a.property', 'nome');

        cy.get('#formNome').then($el => {
            cy.wrap($el).type('Funciona via cypress');
        })

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'));
        cy.wrap(promise).then(ret => console.log(ret));
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botao'));

        cy.wrap(1).should(num => {
            return 2;
        }).should('be.equal', 1);

    })

    it('Its...', ()=>{
        const obj ={nome: 'User', idade: 20};
        cy.wrap(obj).should('have.property', 'nome', 'User');
        cy.wrap(obj).its('nome').should('be.equal', 'User');
        //Its é mais usado para pegar as propriedades de um obj
        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}};
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos');
        cy.title().its('length').should('be.equal', 20);
        
    })

    it.only('Invoke...', ()=>{
        const getValue = ()=> 1;
        const soma =(a, b)=> a+b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1);
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7);

        cy.get('#formNome').invoke('val', 'Texto via invoke');
    })
})