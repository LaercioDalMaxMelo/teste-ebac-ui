/// <reference types= "cypress" />

import produtosPage from "../../support/page-objects/produtos.page";



describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
      produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')    
            cy.get('#tbay-main-content').should('exist')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto) 
        cy.get('.product_title').should('contain', produto)
        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')

    });

    it('Deve adcionar produto ao carrinho', () => {
        let qtd = 4
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Red', qtd)

        cy.get('.woocommerce-message').should('contain',qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
        
    });


    it.only('Deve adcionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>  {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })
        
    });
});
