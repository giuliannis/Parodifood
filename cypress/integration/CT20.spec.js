/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir que o campo “Numero” seja preenchido ao finalizar um pedido', () => {

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

    it('E não preencher o campo numero', () => {
        Pagamento.clicarNoCampoNumero();
        Pagamento.clicarNoCampoEndereco();
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = ' Obrigatório e somente números';

        Pagamento.verificarSeAMensagemDeErroDoNumeroEhIgual(mensagem);
    });
});