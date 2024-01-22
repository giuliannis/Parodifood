/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';

describe('Visualizar as avaliações realizadas por clientes do restaurante', () => {

    it('Dado que o cliente está na página do restaurante que deseja realizar a compra', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
        Restaurants.acessarORestaurantePizzaBug();
    });

    it('Quando a aba das avaliações for acessada', () => {
        Restaurants.acessarAbaDeAvaliacoes();
    });

    it('Então as avaliações realizadas por outros clientes deverão ser listadas', () => {
        Restaurants.verificarSeAlgumaAvaliacaoEstaVisivel();
    });
});