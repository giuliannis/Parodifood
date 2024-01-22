/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir que o campo “Número” contenha apenas números', () => {

    it('Dado que um pedido está sendo finalizado', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
    });

    it('E que o cliente está informando seus dados', () => {
        Restaurants.fecharOPedido();
    });

    it('Quando o campo número for preenchido com letras', () => {
        const numero = 'num';

        Pagamento.preencherNumero(numero);
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = ' Obrigatório e somente números';

        Pagamento.verificarSeAMensagemDeErroDoNumeroEhIgual(mensagem);
    });
});