/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';

describe('Adicionar item ao carrinho', () => {

    it('Dado que o cliente está na página inicial do Parodifood', () => {
        Restaurants.acessarParodifood();
    });

    it('E que a aba dos restaurantes foi acessada', () => {
        Restaurants.acessarRestaurantes();
    });

    it('E que a página de um dos restaurantes disponíveis foi aberta', () => {       
        Restaurants.acessarORestaurantePizzaBug();
    });

    it('Quando um dos pratos disponíveis para venda for adicionado ao carrinho', () => {       
        Restaurants.adicionarPizzaAoCarrinho();
        Restaurants.verificarConfirmacaoDaAdicaoDaPizza();
    });

    it('Então ele deve estar disponível no card do carrinho', () => {
        const nomeDoItem = '(1x) Pizza de mussarela';  

        Restaurants.verificarSeOItemEstaNoCarrinho(nomeDoItem);
    });
});