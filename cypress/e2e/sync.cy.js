///<reference types="cypress"/>

describe('Esperas...', () => {
    //before faz com que o comando seja executado antes para todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    //beforeEach faz com que o comando seja executado antes para cada um dos testes
    beforeEach(() => {
        cy.reload();
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('be.not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('be.not.exist');
        cy.get('#novoCampo').should('be.exist');
        cy.get('#novoCampo').type('funciona');
    })
    //Não se deve encadear testes de valencias que não opostas, exemplo: "be.exist", "be.not.exist"..
    it('Deve fazer retrys', () => {
        
        cy.get('#buttonDelay').click();
       
        cy.get('#novoCampo').should('be.exist');
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click();
        //Comando .find entra nos elementos html e procura por algo especifico
        cy.get('#lista li').find('span').should('contain', 'Item 1');
        //Para poder procurar por algo especifico em multiplos elementos é necessário dar get em toda a arvore de elementos do html: ('#lista li span')
        cy.get('#lista li span').should('contain', 'Item 2').should('contain', 'Item 1');
    })

    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click();
        //Timeout pausa a aplicação até que os elementos respondam ao request solicitado ou o tempo previsto termine
        //cy.get('#novoCampo', {timeout: 10000}).should('exist');
        
        //cy.get('#buttonListDOM').click();
        //Wait pausa a aplicação até que o tempo previsto termine
       //cy.wait(5000);
       //cy.get('#lista li span').should('contain', 'Item 2');

        cy.get('#buttonListDOM').click();
        cy.get('#lista li span').should('have.length', 1);
        cy.get('#lista li span', {timeout: 5000}).should('have.length', 2);
    })

    it('Click retry', () => {
        //Click não possui tempo de retry/timeout assim que clicar ele já vai pegar o value do should, da para por um wait e forçar esse tempo
        cy.get('#buttonCount').click().click().should('have.value', '1');
        //cy.wait(5000);
        //cy.get('#buttonCount').should('have.value', 111);
        //TODO rever promises
    })

    it.only('Should vs Then', () => {
        //cy.get('#buttonListDOM') esta buscando elementos e colocando em uma promise chamada "el"
        cy.get('#buttonListDOM').then($el => {
            // O Then aguarda o get ser finalizado para então continuar seus comandos, enquanto o Should roda seus comandos entquando o get ainda esta trabalhando.            
            //console.log($el);
            //el é um elemento html/jquery, neste caso temos que usar o expect para fazer as assertivas
            expect($el).to.have.length(1);
            //return 2
        }).and ('have.id', 'buttonListDOM');
    })
})