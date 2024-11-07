/// <reference types ="cypress" />

describe('Funcionalidade: Detalhe da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
        cy.login(login.usuario, login.senha)
        })
       
    });
    
    it('Deve completar detlahes da conta com sucesso', () => {
        cy.detalhesConta('Laercio', 'Melo' , 'Lasmelo')
        cy.get('.woocommerce-message').should('exist')
        
    });

});