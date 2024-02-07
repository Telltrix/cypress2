/// <reference types="cypress-xpath"/>

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    
    // Para alterar a ordem de prioridade do locator e cadastrar novo locator, colocar codigo em 'support/index'. 
    // Cypress.SelectorPlayground.defaults({
    //     selectorPriority: ['id', 'class', 'attributes'],
    //   })

    it('Using jQuery selectors', () => {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input');
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3)');//tr:eq(0)= eq(0) seta o indice. td:nth-child(3)=nth-child(3) seta o indice do child.
        cy.get("[onclick*='Francisco']")//Usar o *= para pegar tudo que contain Francisco, para atributos com '' utilizar "" ou \
        cy.get('[onclick*=\'Francisco\']').click();//Usar o *= para pegar tudo que contain Francisco, para atributos com '' utilizar "" ou \
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) input');//Procurando na tabela uma coluna que contenha Doutorado, interagindo com o input atraves de simblings ~
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input'); //Procurando na tabela uma linha que contenha Doutorado, interagindo com o input
    })

    it.only('Using xpath selectors', ()=> {
        //https://www.red-gate.com/simple-talk/development/dotnet-development/xpath-css-dom-and-selenium-the-rosetta-stone/
        cy.xpath('//input[@type=\'button\'][@value=\'Clique aqui\']');
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='button']").click();//contains(., )seleciona tudo em qq lugar que contenha. /.. sobe um nivel na seleção
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('Funciona');///following-sibling:: seleciona irmão
    })

})