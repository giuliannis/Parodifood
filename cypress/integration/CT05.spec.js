/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';
import Pagamento from '../support/pages/Pagamento';


describe('Realizar um pedido com pagamento por cartão débito', () => {

    it('Dado que o cliente adicionou itens ao carrinho', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
    });

    it('E que prosseguiu com o fechamento do pedido', () => {
        Restaurants.fecharOPedido();
    });

    it('Quando os dados necessários para completar a compra forem informados', () => {
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

    it('E a opção de pagamento por cartão débito foi marcada', () => {
        Pagamento.selecionarPagamentoPorDebito();
    });

    it('Então o pedido será realizado utilizando o pagamento escolhido', () => {
        Pagamento.concluirOPedido();
        //não esquecer da conclusão do pedido
    });
});