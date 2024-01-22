/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir que uma forma de pagamento seja marcada', () => {

    it('Dado que um pedido está sendo finalizado', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
        Restaurants.fecharOPedido();
    });

    it('Quando o cliente informar seus dados', () => {
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
    });

    it('Mas não selecionar uma forma de pagamento', () => {
        
    });

    it('Então o pedido não poderá ser finalizado', () => {
        Pagamento.verificarSeOBotaoConcluirEstaDesativado();
    });
});