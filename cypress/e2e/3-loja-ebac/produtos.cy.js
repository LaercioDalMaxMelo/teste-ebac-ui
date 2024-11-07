/// <reference types= "cypress" />

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
           // .last()
           // .eq(2)
            .contains('Apollo Running Short')
            .click()    
            cy.get('#tbay-main-content').should('exist')

    });
});