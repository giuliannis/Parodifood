/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir a inserção de um e-mail válido ao campo “E-mail” ao finalizar um pedido', () => {

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

    it('Quando o campo e-mail for preenchido com um e-mail inválido', () => {
        const email = 'abcd';

        Pagamento.preencherEmail(email);
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = 'E-mail inválido';

        Pagamento.verificarSeAMensagemDeErroDoEmailEhIgual(mensagem);
    });
});
