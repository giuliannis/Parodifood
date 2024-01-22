/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir a inserção de um e-mail idêntico no campo Confirmação de e-mail ao que foi informado em E-mail', () => {

    it('Dado que um pedido está sendo finalizado', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
        Restaurants.fecharOPedido();
    });

    it('E que o cliente está informando seu e-mail', () => {
        const email = 'clientenovo@yopmail.com';

        Pagamento.preencherEmail(email);
    });

    it('Quando o campo confirmação do e-mail for preenchido com um e-mail diferente do campo e-mail', () => {
        const email = 'clienteantigo@yopmail.com';

        Pagamento.preencherConfirmacaoDoEmail(email);
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = 'Email-s não conferem';

        Pagamento.verificarSeAMensagemDeErroDaConfirmacaoDeEmailEhIgual(mensagem);
    });
});
