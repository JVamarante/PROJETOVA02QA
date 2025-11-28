Feature: Consulta no site da Receita Federal
    Como um contribuinte
    Quero buscar informações sobre impostos
    Para esclarecer minhas dúvidas

    Scenario: Buscar por Imposto de Renda usando Fixture
        Given que eu acesso o site da Receita Federal
        When eu busco pelo termo configurado na fixture
        Then devo ver os resultados sobre o assunto