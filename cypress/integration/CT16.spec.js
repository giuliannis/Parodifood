/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Adicionar itens de restaurantes diferentes ao carrinho', () => {

    it('Dado que o cliente está realizando uma compra', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        
    });

    it('E que foram adicionados itens de restaurantes diferentes ao carrinho', () => {
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestauranteStarbugsCofee();
        Restaurants.adicionarCappuccinoAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDoCappucino();

        Restaurants.fecharOPedido();
    });

    it('Quando ele for finalizar o pedido', () => {
        const nome = 'Juliana Souza',
            email = 'julianasouza_12@yopmail.com',
            confirmacao = 'julianasouza_12@yopmail.com',
            endereco = 'Avenida Barão do Rio Branco',
            numero = '200',
            complemento = 'Vila São José';

        Pagamento.preencherNome(nome);
        Pagamento.preencherEmail(email);
        Pagamento.preencherConfirmacaoDoEmail(confirmacao);
        Pagamento.preencherEndereco(endereco);
        Pagamento.preencherNumero(numero);
        Pagamento.preencherComplemento(complemento);
        Pagamento.selecionarPagamentoDinheiro();
    });

    it('Então a compra será realizada com sucesso', () => {
        Pagamento.concluirOPedido();
    });
});