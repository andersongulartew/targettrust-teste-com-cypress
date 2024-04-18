describe("test aba Alerts and Confirmation", ()=>{

    beforeEach(()=>{
        cy.visit("alertsconfirmation.html?#");

    })

    it("Should  validate title page",  ()=>{
        //valida o titulo da pagina
        cy.title().should("to.be.equal", "Alerts and Confirmations");

    })

    it.only("validate buttons",()=>{
        cy.get('input[id="alerta1"]').click() // Exibir alerta!
        cy.get('#confirmacao1').click() // Exibir confirmação!
        cy.get('[value="Exibir um alerta com delay!"]').click() // Exibir um alerta com delay!
        cy.get('[value="Exibir uma confirmação com delay!"]').click() // Exibir uma confirmação com delay!

    })

})