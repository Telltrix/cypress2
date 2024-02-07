///<reference types="cypress"/>
describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo ');
        let syncTitle;
        //.debug() Debuga e da mais informações no console
        //cy.pause Pausa o teste dando a opçãop de ir executando as interações uma por uma
        cy.title().then(title => {
            //console.log(title);
            //cy.get('#formNome').type(title);
            
            syncTitle = title;
            expect(syncTitle).equals('Campo de Treinamento');
        })

        cy.get('[data-cy=dataSobrenome]').then($el =>{
            $el.val(syncTitle);
        })
        cy.get('#elementosForm\\:sugestoes').then($el =>{
            cy.wrap($el).type(syncTitle);
            
        })
        
    })
    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        //Encontrando elemento e clicando nele, depois comparando valor
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!');
    })



})
