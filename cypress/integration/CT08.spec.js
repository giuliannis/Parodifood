/// <reference types="cypress" />

import Restaurants from '../support/pages/Restaurantes';

describe('Realizar busca por restaurantes através do nome', () => {

    it('Dado que o cliente acessou a aba dos restaurantes', () => {
        Restaurants.acessarParodifood();
        Restaurants.acessarRestaurantes();
    });

    it('E que a super busca foi ativada', () => {
        Restaurants.ativarASuperBusca();
    });

    it('Quando o nome do restaurante for digitado', () => {
        const nomeDoRestaurante = 'Pizza Bug';

        Restaurants.digitarONomeDoRestaurante(nomeDoRestaurante);
    });

    it('Então deverá ser retornado o restaurante pesquisado', () => {
        Restaurants.verificarSeEhOCardDoRestaurante();
    });
});