/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';

describe('Garantir que tenha ao menos um item no carrinho', () => {

    it('Dado que um pedido está sendo finalizado', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
        Restaurants.fecharOPedido();
    });

    it('Quando o cliente informar os dados para finalização do pedido', () => {
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

    it('Mas excluir o item do pedido', () => {
        const mensagem = 'Não há itens no seu carrinho. Que tal começar por';

        Pagamento.realizarAExclusaoDoItem();
        Pagamento.verificarSeAMensagemDoItemEhIgual(mensagem);
    });

    it('Então o pedido não poderá ser finalizado', () => {
        Pagamento.verificarSeOBotaoConcluirEstaDesativado();
    });
});