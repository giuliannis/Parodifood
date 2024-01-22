/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir o mínimo de caracteres seja informado ao campo “Endereço” ao finalizar um pedido', () => {

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

    it('Quando o campo endereço for preenchido com menos caracteres que o permitido', () => {
        const endereco = 'Rua';

        Pagamento.preencherEndereco(endereco);
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = 'Campo obrigatório e com 5 caracteres';

        Pagamento.verificarSeAMensagemDeErroDoEndereçoEhIgual(mensagem);
    });
});