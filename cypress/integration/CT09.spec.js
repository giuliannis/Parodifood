/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir o mínimo de caracteres seja informado ao campo “Nome” ao finalizar um pedido', () => {

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

    it('Quando o campo nome for preenchido com menos caracteres que o permitido', () => {
        const nome = 'Ana';

        Pagamento.preencherNome(nome);
    });

    it('Então o sistema deverá retornar uma mensagem de erro', () => {
        const mensagem = 'Campo obrigatório e com 5 caracteres';

        Pagamento.verificarSeAMensagemDeErroDoNomeEhIgual(mensagem);
    });
});