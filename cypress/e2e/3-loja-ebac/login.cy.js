/// <reference types= "cypress" />

describe('Funcionalidade: login', () =>{

    it('Deve fazer login com sucesso', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('laercio.teste@teste.com.br')
        cy.get('#password').type('L@$mel06696')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, laercio.teste (não é laercio.teste? Sair)')
        


    })

})