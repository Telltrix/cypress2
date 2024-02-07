/// <reference types="cypress-xpath"/>

describe('Work with fixture', () => {
    it('Test with fixture file', function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.fixture('userData').as('usuario').then(() => {//Adicionado o file userData em fixture para alimentar os dados abaixo
            cy.get('#formNome').type(this.usuario.nome);
            cy.get('#formSobrenome').type(this.usuario.sobrenome);
            cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click();//No caso de values usar `` e ${}
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click();
            cy.get('#formEscolaridade').select(this.usuario.escolaridade);
            cy.get('#formEsportes').select(this.usuario.esportes);
            cy.get('#formCadastrar').click();
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
        })
    })


})