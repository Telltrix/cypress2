// Para rodar os testes em linha de comando é necessário adicionar um script em package.json com a linha: "cypress:run": "cypress run"
// Desta forma basta vc navegar até a pasta onde se encontra o package e rodar o comando: npm run cypress:run
// Todos os testes das pastas no diretório de testes irão rodar.
// Para rodar um teste especifico o comando é: npm run cypress:run -- --spec cypress/e2e/time.cy.js
// Para visualizar a execução basta adicionar o comando --headed  e para não fechar após a execução é o comando --no-exit
// Para executar em um browser especifico: --browser chrome
// Para rodas todos os testes de uma pasta especifica, vc deve navegar até a pasta e npm run cypress:run -- --spec cypress/e2e/barriga e adicionar o /**/*