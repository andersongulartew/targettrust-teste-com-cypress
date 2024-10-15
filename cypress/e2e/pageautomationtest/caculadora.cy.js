describe("test aba calculadora",()=>{
    beforeEach(()=>{
        cy.visit("desafiosoma.html");
    })
    it("validate soma",()=>{
        
        cy.get('input[id="number1"]').type(35)
        cy.get('input[id="number2"]').type(56)
        cy.get('#somar').click()
        //cy.get('#limpar').click()
    })

    it("validate subtrair",()=>{
        cy.get('input[id="number1"]').type(105)
        cy.get('input[id="number2"]').type(15)

        cy.get('#subtrair').click()
        //cy.get('#limpar').click()
    })

    it("validate multiplicar",()=>{
        cy.get('input[id="number1"]').type("26")
        cy.get('input[id="number2"]').type("7")

        cy.get('#multiplicar').click()
        //cy.get('#limpar').click()
    })

    it("validate divisão",()=>{
        cy.get('input[id="number1"]').type("289")
        cy.get('input[id="number2"]').type("3")

        cy.get('#dividir').click()
        //cy.get('#limpar').click()
    })


})
