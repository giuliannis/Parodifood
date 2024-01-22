
const el = require('./elements').ELEMENTS;

class Restaurants {

    acessarParodifood(){
        cy.visit('https://parodifood.herokuapp.com/');
    }

    acessarRestaurantes(){

        cy.route('GET', '**/restaurants').as('getRestaurants');
        cy.get(el.menuRestaurantes).click();

        this.verificarSeOStatusDoGetDeRestaurantesEh200();
    }

    verificarSeOStatusDoGetDeRestaurantesEh200(){

        cy.wait('@getRestaurants').then((xhr) => {
            expect(xhr.status).be.eq(200);
        });
    }

    conferirOTituloDoMenu(){
        cy.get(el.tituloDoMenu).contains('Ta na hora de matar a fome!');
    }

    acessarORestaurantePizzaBug() {
        cy.route('GET', '**/pizza-bug').as('getPizzaBug');
        cy.get(el.pizzaBug).click();

        this.verificarSeOStatusDoGetDePizzaBugEh200();
    }

    verificarSeOStatusDoGetDePizzaBugEh200(){

        cy.wait('@getPizzaBug').then((xhr) => {
            expect(xhr.status).be.eq(200);
        });
    }

    acessarORestauranteStarbugsCofee() {
        cy.route('GET', '**/starbugs').as('getStarbugs');
        cy.get(el.starBugs).click();

        this.verificarSeOStatusDoGetDoStarbugsEh200();
    }

    verificarSeOStatusDoGetDoStarbugsEh200(){

        cy.wait('@getStarbugs').then((xhr) => {
            expect(xhr.status).be.eq(200);
        });
    }

    conferirOTituloDoRestauranteEhPizzaBug(){
        cy.get(el.tituloPizzaBug).contains('Pizza Bug')
    }

    adicionarPizzaAoCarrinho(){
        cy.get(el.adicionaPizza).click();
    }

    adicionarCappuccinoAoCarrinho(){
        cy.get(el.adicionaCappuccino).click();
    }

    verificarConfirmacaoDaAdicaoDaPizza(){
        cy.get(el.confirmacaoDaAdicao).contains('Você adicionou o item Pizza de mussarela');
    }

    verificarConfirmacaoDaAdicaoDoCappucino(){
        cy.get(el.confirmacaoDaAdicao).contains('Você adicionou o item Cappuccino com Chantilly');
    }

    verificarSeOItemEstaNoCarrinho(text){
        cy.get(el.nomeDoItem).contains(text);
    }

    fecharOPedido(){
        cy.get(el.fecharPedido).click();
    }

    acessarAbaDeAvaliacoes(){
        cy.route('GET', '**/reviews').as('getReviews');
        cy.get(el.menuAvaliacoes).click();

        this.verificarSeOStatusDoGetDeAvaliacoesEh200();
    }

    verificarSeOStatusDoGetDeAvaliacoesEh200(){

        cy.wait('@getReviews').then((xhr) => {
            expect(xhr.status).be.eq(200);
        });
    }

    verificarSeAlgumaAvaliacaoEstaVisivel(){
        cy.get(el.nomeDoUsuario).contains('Julia');
        cy.get(el.textoDaAvaliacao).contains('Tudo muito bom, entrega no tempo certo');
    }

    ativarASuperBusca(){
        cy.get(el.iconeDaBusca).click();
    }

    digitarONomeDoRestaurante(text){
        cy.get(el.textBoxDaBusca).type(text);
    }

    verificarSeEhOCardDoRestaurante(){
        cy.get(el.cardPizzaBug).contains('Pizza Bug');
    }

}

export default new Restaurants();