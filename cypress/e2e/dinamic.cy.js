/// <reference types="cypress-xpath"/>

describe('Dinamic tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']//array de dados
    foods.forEach(food => {
        it(`Cadastro com a comida ${food}`, ()=> {
            cy.get('#formNome').type('Felipe');
            cy.get('#formSobrenome').type('Machado');
            cy.get(`[name=formSexo][value=F]`).click();
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click();
            cy.get('#formEscolaridade').select('Mestrado');
            cy.get('#formEsportes').select('Corrida');
            cy.get('#formCadastrar').click();
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
            
        })
    })
    
    it.only('Cadastro selecionando todos com o each', ()=> {
        cy.get('#formNome').type('Felipe');
        cy.get('#formSobrenome').type('Machado');
        cy.get(`[name=formSexo][value=F]`).click();

        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() != 'vegetariano')
                cy.wrap($el).click();
        });
        
        cy.get('#formEscolaridade').select('Mestrado');
        cy.get('#formEsportes').select('Corrida');
        cy.get('#formCadastrar').click();
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
        
    })

})