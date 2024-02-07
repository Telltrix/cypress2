///<reference types="cypress"/>

describe('Exercício 3, cenário 1', () => {
    before(() => {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
    })

    it('Selecionar o tamanho como XXL', ()=>{
        cy.get(':nth-child(8) > label > .checkmark').should('have.text', 'XXL').click();
    })

    it('Ordenar por decrescente', ()=>{
        //Não achei opções para sort.
        
    })

    it('Selecionar a camiseta Skuul, verificar valor unitário', ()=>{
        //Não achei camiseta Skull nas opções XXL, vou utilizar a camiseta Ringer Hall Pass.
        cy.get('.ctLSpw > .sc-124al1g-0').click();
        cy.get('.sc-11uohgb-4 > p').should('have.text', '$  10.90');
        cy.get('.sc-1h98xa9-0 > span').click();
    })

    it('Selecionar a camiseta Cat Black', ()=>{
        //Não achei camiseta Cat Black nas opções XXL, vou utilizar a camiseta Slim black T-shirt.
        cy.get('.fcMvnw > .sc-124al1g-0').click();
        cy.get(':nth-child(2) > .sc-11uohgb-4 > p').should('have.text', '$  49.90');
        cy.get('.sc-1h98xa9-0 > span').click();
        
    })

    it('No carrinho, adicionar mais 3 camisetas Skull', ()=>{
        //Não achei camiseta Skull nas opções XXL, vou utilizar a camiseta Ringer Hall Pass.
        cy.get('.sc-1h98xa9-2').click();
        cy.get(':nth-child(1) > .sc-11uohgb-4 > div > :nth-child(2)').click().click().click();
    })
    
    it('Validar se o número exibido no carrinho é igual com o número de camisetas', ()=>{
        cy.get('.sc-1h98xa9-3').should('have.text', '5');
    })
    
    it('Validar se o preço total do pedido bate com o cálculo da quantidade de camisetas', ()=>{
        cy.get('.sc-1h98xa9-9').should('have.text','$ 93.50');
    })

    it('Finalizar a compra e verificar subtotal', ()=>{
        cy.get('.sc-1h98xa9-11').click();
        cy.on('window:alert', msg =>{
            expect(msg).to.contains('Subtotal: $ 93.50');
        })
    })
})