
const el = require('./elements').ELEMENTS;

class Pagamento {

    preencherNome(text){
        cy.get(el.nome).type(text).should('have.value', text);
        cy.wait(1000);
    }

    clicarNoCampoNome(){
        cy.get(el.nome).click();
    }

    preencherEmail(text){
        cy.get(el.email).type(text).should('have.value', text);
        cy.wait(1000);
    }

    clicarNoCampoEmail(){
        cy.get(el.email).click();
    }

    preencherConfirmacaoDoEmail(text){
        cy.get(el.confirmacaoEmail).type(text).should('have.value', text);
        cy.wait(1000);
    }

    preencherEndereco(text){
        cy.get(el.endereco).type(text).should('have.value', text);
        cy.wait(1000);
    }

    clicarNoCampoEndereco(){
        cy.get(el.endereco).click();
    }

    clicarNoCampoNumero(){
        cy.get(el.numero).click();
    }

    preencherNumero(text){
        cy.get(el.numero).type(text).should('have.value', text);
        cy.wait(1000);
    }

    preencherComplemento(text){
        cy.get(el.complemento).type(text).should('have.value', text);
        cy.wait(1000);
    }

    selecionarPagamentoDinheiro(){
        cy.get(el.pagamentoDinheiro).click();
    }

    selecionarPagamentoPorDebito(){
        cy.get(el.pagamentoDebito).click();
    }

    selecionarPagamentoPorRefeicao(){
        cy.get(el.pagamentoRefeicao).click();
    }

    concluirOPedido(){
        cy.route('POST', '**/orders').as('postOders');
        cy.get(el.botaoConcluiPedido).click();

        this.verificarSeOStatusDoPostDoConcluirPedidoEh201();
    }

    verificarSeOStatusDoPostDoConcluirPedidoEh201(){

        cy.wait('@postOders').then((xhr) => {
            expect(xhr.status).be.eq(201);
        });
    }

    verificarSucessoDoPedido(){
        cy.get(el.confirmaPedido).contains('Pedido Concluído');
    }

    verificarSeAMensagemDeErroDoNomeEhIgual(text){
        cy.get(el.mensagemDeErroNome).contains(text);
    }

    verificarSeAMensagemDeErroDoEmailEhIgual(text){
        cy.get(el.mensagemDeErroEmail).contains(text);
    }

    verificarSeAMensagemDeErroDaConfirmacaoDeEmailEhIgual(text){
        cy.get(el.mensagemDeErroConfirmacaoEmail).contains(text);
    }

    verificarSeAMensagemDeErroDoEmailInvalidoDaConfirmacaoDeEmailEhIgual(text){
        cy.get(el.mensagemDeErroInvalidoConfirmacaoEmail).contains(text);
    }

    verificarSeAMensagemDeErroDoEndereçoEhIgual(text){
        cy.get(el.mensagemDeErroEndereço).contains(text);
    }

    verificarSeAMensagemDeErroDoNumeroEhIgual(text){
        cy.get(el.mensagemDeErroNumero).contains(text);
    }

    verificarSeOBotaoConcluirEstaDesativado(){
        cy.get(el.botaoConcluiPedido).should('be.disabled');
    }

    realizarAExclusaoDoItem(){
        cy.get(el.excluiItem).click();
    }

    verificarSeAMensagemDoItemEhIgual(text){
        cy.get(el.mensagemDoItem).contains(text);
    }
}

export default new Pagamento();