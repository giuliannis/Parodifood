/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir que o campo “Endereço” seja preenchido ao finalizar um pedido', () => {

    it('Dado que um pedido está sendo finalizado', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
    });

    it('Quando o cliente informar os dados para finalizar o pedido', () => {
        Restaurants.fecharOPedido();
    });

    it('Mas o campo endereço não for preenchido', () => {
        Pagamento.clicarNoCampoEndereco();
        Pagamento.clicarNoCampoNumero();
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = 'Campo obrigatório e com 5 caracteres';

        Pagamento.verificarSeAMensagemDeErroDoEndereçoEhIgual(mensagem);
    });
});