/// <reference types="cypress-xpath"/>
import buildEnv from '../../support/buildEnv'
import loc from '../../support/locators'
import '../../support/commandsInvoice'

describe('Should test at functional level', () => {
    after(() => {
        cy.clearLocalStorage()
    })
    
    beforeEach(() => {
        buildEnv()
        cy.cmdLogin('a@a', 'senha errada')
    })

    it('should test the responsiveness', () => {
        cy.get('[data-test=menu-home]').should('exist')
            .and('be.visible')
        cy.viewport(500, 700) //redimensiona a aplicação para tesdtes de layout https://docs.cypress.io/api/commands/viewport#__docusaurus_skipToContent_fallback
        cy.get('[data-test=menu-home]').should('exist')
            .and('be.not.visible')
        cy.viewport('iphone-5')
        cy.get('[data-test=menu-home]').should('exist')
            .and('be.not.visible')
        cy.viewport('ipad-2')
        cy.get('[data-test=menu-home]').should('exist')
            .and('be.visible')
    })

    it('Should create an account', () => {
        cy.intercept({
                method: 'POST',
                url: '/contas'
            }, 
            { id: 3, nome: 'Conta de teste', visivel: true, usuario_id: 1 }
        ).as('saveConta')

        cy.acessAccountSettings()

        cy.intercept({
                method: 'GET',
                url: '/contas'
            },
            [
                { id: 1, nome: 'Carteira', visivel: true, usuario_id: 1 },
                { id: 2, nome: 'Banco', visivel: true, usuario_id: 1 },
                { id: 3, nome: 'Conta de teste', visivel: true, usuario_id: 1 },
            ]
        ).as('contasSave')

        cy.createAccount('Conta de teste')
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.intercept({
                method: 'PUT',
                url: '/contas/**'
            },
            { id: 1, nome: 'Conta alterada', visivel: true, usuario_id: 1 }
        )

        // cy.get(':nth-child(7) > :nth-child(2) > .fa-edit')
        cy.acessAccountSettings()

        cy.xpath(loc.INVOICE.FN_XP_BTN_ALTERAR('Banco')).click()
        cy.get(loc.INVOICE.INVC_NAME)
            .clear()
            .type('Conta alterada')
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click()
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'Conta atualizada com sucesso')
    })

    it('Should not create an account with same name', () => {
        cy.intercept({
            method: 'POST',
            url: '/contas'
        }, { 
            statusCode: 400,
            body: {"error": "Já existe uma conta com esse nome!" }
        }).as('saveContaMesmoNome')

        cy.acessAccountSettings()

        cy.get(loc.INVOICE.INVC_NAME).type('Conta mesmo nome')
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click()
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'code 400')
    })

    it('Should create a transaction', () => {
        cy.intercept({
                method: 'POST',
                url: '/transacoes'
            },
            { 
                "id": 31433, 
                "descricao": "asdasd", 
                "envolvido": "sdfsdfs", 
                "observacao": null, 
                "tipo": "DESP", 
                "data_transacao": "2019-11-13T03:00:00.000Z", 
                "data_pagamento": "2019-11-13T03:00:00.000Z", 
                "valor": "232.00", 
                "status": false, 
                "conta_id": 42069, 
                "usuario_id": 1, 
                "transferencia_id": null, 
                "parcelamento_id": null 
            }
        )

        cy.intercept({
                method: 'GET',
                url: '/extrato/**'
            },
            {fixture: 'movimentacaoSalva.json'}
        )

        cy.get(loc.MENU.BTN_SHIFT).click();

        cy.get(loc.SHIFT_SCREEN.DESC).type('Desc')
        cy.get(loc.SHIFT_SCREEN.VALUE).type('123')
        cy.get(loc.SHIFT_SCREEN.INTERESS).type('Inter')
        cy.get(loc.SHIFT_SCREEN.CONTA).select('Banco')
        cy.get(loc.SHIFT_SCREEN.BTN_STATUS).click()
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click()
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'sucesso')

        cy.get(loc.SUMMARY.LIST_NMBR).should('have.length', 7)
        cy.xpath(loc.SUMMARY.FN_XP_SUMMARY_DSC_INVC('Desc', '123')).should('exist')
    })

    it('Should get balance', () => {
        cy.intercept({
                method: 'GET',
                url: '/transacoes/**'
            },
            {
                "conta": "Conta para saldo",
                "id": 31436,
                "descricao": "Movimentacao 1, calculo saldo",
                "envolvido": "CCC",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2019-11-13T03:00:00.000Z",
                "data_pagamento": "2019-11-13T03:00:00.000Z",
                "valor": "3500.00",
                "status": false,
                "conta_id": 42079,
                "usuario_id": 1,
                "transferencia_id": null,
                "parcelamento_id": null
            }
        )

        cy.intercept({
                method: 'PUT',
                url: '/transacoes/**'
            },
            {
                "conta": "Conta para saldo",
                "id": 31436,
                "descricao": "Movimentacao 1, calculo saldo",
                "envolvido": "CCC",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2019-11-13T03:00:00.000Z",
                "data_pagamento": "2019-11-13T03:00:00.000Z",
                "valor": "3500.00",
                "status": false,
                "conta_id": 42079,
                "usuario_id": 1,
                "transferencia_id": null,
                "parcelamento_id": null
            }
        )

        cy.get(loc.MENU.BTN_HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Carteira')).should('contain', '100,00')

        cy.get(loc.MENU.BTN_STATEMENT).click()
        cy.xpath(loc.SUMMARY.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        // cy.wait(1000)
        cy.get(loc.SHIFT_SCREEN.DESC).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.get(loc.SHIFT_SCREEN.BTN_STATUS).click()
        cy.xpath(loc.INVOICE.XP_INVC_BTN_SAVE).click()
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'sucesso')

        cy.intercept({
                method: 'GET',
                url: '/saldo'
            },
            [{
                conta_id: 999,
                conta: "Carteira",
                saldo: "4034.00"
            },
            {
                conta_id: 9909,
                conta: "Banco",
                saldo: "10000000.00"
            },
            ]
        ).as('saldoFinal')

        cy.get(loc.MENU.BTN_HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Carteira')).should('contain', '4.034,00')
    })

    it('Should remove a transaction', () => {
        cy.intercept({
                method: 'DELETE',
                url: '/transacoes/**'
            }, 
            {statusCode: 204}
        ).as('del')

        cy.get(loc.MENU.BTN_STATEMENT).click()
        cy.xpath(loc.SUMMARY.FN_XP_BTN_DELETE('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'sucesso')
    })

    it('Should validate data send to create an account', () => {
        const reqStub = cy.stub()
        cy.intercept({
                method: 'POST',
                url: '/contas'
            },
            (req) => {
                //console.log(req.headers)
                expect(req.body.nome).to.be.empty
                expect(req.headers).to.have.property('authorization')

                req.reply({id: 3, nome: 'Conta de teste', visivel: true, usuario_id: 1 })
            }
        ).as('saveConta')

        cy.acessAccountSettings()

        cy.intercept({
                method: 'GET',
                url: '/contas'
            },
            [
                { id: 1, nome: 'Carteira', visivel: true, usuario_id: 1 },
                { id: 2, nome: 'Banco', visivel: true, usuario_id: 1 },
                { id: 3, nome: 'Conta de teste', visivel: true, usuario_id: 1 },
            ]
        ).as('contasSave')

        cy.createAccount('{CONTROL}')
        //cy.wait('@saveConta').its('request.body.nome').should('not.be.empty')
        
        cy.get(loc.MESSAGE.MSG_TOAST).should('contain', 'Conta inserida com sucesso')
    })

    it('Should test colors', () => {
        cy.intercept({
                method: 'GET',
                url: '/extrato/**'
            },
            [
                { "conta": "Conta para movimentacoes", "id": 31434, "descricao": "Receita paga", "envolvido": "AAA", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": true, "conta_id": 42077, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta com movimentacao", "id": 31435, "descricao": "Receita pendente", "envolvido": "BBB", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": false, "conta_id": 42078, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31436, "descricao": "Despesa paga", "envolvido": "CCC", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "3500.00", "status": true, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31437, "descricao": "Despesa pendente", "envolvido": "DDD", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1000.00", "status": false, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null }
            ]
        )

        cy.get(loc.MENU.BTN_STATEMENT).click()
        cy.xpath(loc.SUMMARY.FN_XP_LINHA('Receita paga')).should('have.class', 'receitaPaga')
        cy.xpath(loc.SUMMARY.FN_XP_LINHA('Receita pendente')).should('have.class', 'receitaPendente')
        cy.xpath(loc.SUMMARY.FN_XP_LINHA('Despesa paga')).should('have.class', 'despesaPaga')
        cy.xpath(loc.SUMMARY.FN_XP_LINHA('Despesa pendente')).should('have.class', 'despesaPendente')
    })
})