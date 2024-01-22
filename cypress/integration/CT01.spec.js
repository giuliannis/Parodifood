/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';

describe('Verificar lista de restaurantes', () => {

    it('Dado que o cliente está na página inicial do Parodifood', () => {
        Restaurants.acessarParodifood();
    });

    it('Quando a aba dos restaurantes for acessada', () => {
        Restaurants.acessarRestaurantes();
    });

    it('Então uma lista contendo os restaurantes disponíveis deverá ser exibida', () => {       
        Restaurants.conferirOTituloDoMenu();
    });
});

