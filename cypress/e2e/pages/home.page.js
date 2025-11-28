class HomePage {
    elements = {
        areaCabecalho: () => cy.get('header, .br-header', { timeout: 30000 }),

       
        botaoLupa: () => cy.get('.search-trigger, button[aria-label="Buscar"], .fa-search'),
        
   
        inputBusca: () => cy.get('input[type="search"], input[name*="search"], input[name*="busca"], .br-input').first()
    }

    acessar() {
        
        cy.visit('/', { timeout: 60000 });
        
        cy.wait(3000);

        this.elements.areaCabecalho().should('exist');
    }

    realizarBusca(termo) {
        cy.get('body').then(($body) => {
            const lupa = $body.find('.search-trigger, button[aria-label="Buscar"]');
            if (lupa.length) {
                cy.wrap(lupa).click({ force: true });
            }
        });

        cy.wait(1000);

        this.elements.inputBusca()
            .should('exist')
            .clear({ force: true })
            .type(`${termo}{enter}`, { force: true });
    }
}

export const homePage = new HomePage();