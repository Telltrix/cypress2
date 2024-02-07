/// <reference types = "cypress"/>
//Teste
it('A external test', () => {

})
//Grupo de teste
describe ('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
        it.skip('A specific skip test...', () => {

        })
        //"Skip" faz não executar o teste e "only" executa apenas ele. 
        //it.only('A specific skip test...', () => {

        //})
    })
    it('A internal tests...', () => {

    })

})