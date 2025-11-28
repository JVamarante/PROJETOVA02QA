import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/home.page";

let dadosTeste;


Before(() => {
    cy.fixture('massaDeDados').then((dados) => {
        dadosTeste = dados;
    });
});

Given("que eu acesso o site da Receita Federal", () => {
    homePage.acessar();
});

When("eu busco pelo termo configurado na fixture", () => {
    homePage.realizarBusca(dadosTeste.termoBusca);
});

Then("devo ver os resultados sobre o assunto", () => {
    cy.get('body').should('contain', dadosTeste.termoBusca);
});