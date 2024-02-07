///<reference types="cypress"/>

describe('Exercício 2', () => {
    before(() => {
        cy.visit('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/swagger-ui3#/');
        cy.get('#operations-default-CotacaoDolarDia > .opblock-summary > .opblock-summary-method').click();
        cy.get('.btn').click();
        cy.get('.parameters-col_description > select').select('text/plain').should('have.value', 'text/plain');
        cy.get(':nth-child(1) > .parameters-col_description > input').type("'08-30-1999'");
        cy.get('.execute-wrapper > .btn').click();
    })

    it('Validar que a cotação nunca é negativa para uma data passada.', ()=>{
        cy.get('.response-col_description > :nth-child(1) > .microlight').invoke('text').then((text)=>{ 
            var fullText = text;
            var pattern = /[0-9]+/g;
            var arrStr = fullText.match(pattern);
            var arrNumber = arrStr.map((i) => Number(i));
            expect(arrNumber[0]).to.be.above(-1);
            expect(arrNumber[2]).to.be.above(-1);
            console.log(arrNumber);
        })
    })
    

    it('Que os valores sempre obedecem ao mesmo formato, separando as casas decimais por vírgula.', ()=>{
        cy.get('.response-col_description > :nth-child(1) > .microlight').invoke('text').then((text)=>{ 
            var fullText = text;
            var pattern = /[+-]?([0-9]*[,])?[0-9]+/g;
            var arrStr = fullText.match(pattern);
            expect(arrStr[0]).contains(',');
            expect(arrStr[1]).contains(',');
        })
    })

    it('Que os valores sempre apresentam até 4 casas decimais.', ()=>{
        cy.get('.response-col_description > :nth-child(1) > .microlight').invoke('text').then((text)=>{ 
            var fullText = text;
            var pattern = /[0-9]+/g;
            var arrStr = fullText.match(pattern);
            expect(arrStr[1]).to.have.length.of.at.most(4);
            expect(arrStr[3]).to.have.length.of.at.most(4);
        })
    })

})