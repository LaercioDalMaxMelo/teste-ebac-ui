/// <reference types= "cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', ()=>{
        cy.get('#username').type('laercio.teste@teste.com.br')
        cy.get('#password').type('L@$mel06696')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, laercio.teste (não é laercio.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido',()=> {
        cy.get('#username').type('laercio.@teste.com.br')
        cy.get('#password').type('L@$mel06696')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')    

    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha iválida', () => {
        cy.get('#username').type('laercio.teste@teste.com.br')
        cy.get('#password').type('L@$mel066961')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail laercio.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')    

    });

    it('Deve fazer logim com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, laercio.teste (não é laercio.teste? Sair)')
        
    });

    it.only('Deve fazer logim com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, laercio.teste (não é laercio.teste? Sair)')
        })
        
    });

})