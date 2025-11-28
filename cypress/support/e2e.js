// cypress/support/e2e.js

// Ignora erros de console do site que poderiam quebrar o teste
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})