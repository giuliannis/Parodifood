/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';

describe('Visitar a página do restaurante', () => {

    it('Dado que o cliente está na página inicial do Parodifood', () => {
        Restaurants.acessarParodifood();
    });

    it('E que a aba dos restaurantes foi acessada', () => {
        Restaurants.acessarRestaurantes();
    });

    it('Quando a página de um dos restaurantes disponíveis for aberta', () => {       
        Restaurants.acessarORestaurantePizzaBug();
    });

    it('Então deverá apresentar todas as informações disponíveis do restaurante', () => {       
        Restaurants.conferirOTituloDoRestauranteEhPizzaBug();
    });
});
