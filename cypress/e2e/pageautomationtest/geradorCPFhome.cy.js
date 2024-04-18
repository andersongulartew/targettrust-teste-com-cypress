describe("teste aba home link gerado CPF ", ()=>{

    beforeEach(()=>{
        cy.visit("https://www.geradordecpf.org/");

    })
    it("validate CPF correto",  ()=>{

        cy.get('[name="numero"]').type("02715313047")

       cy.get('input[value="Validar CPF"]').click()
})

it("validate CPF lower 11 numbers ",  ()=>{ 

    cy.get('[name="numero"]').type("0271531304")

   cy.get('input[value="Validar CPF"]').click()
})

it("validate CPF higher 11 numbers ",  ()=>{  // bug(deixa passar acima de 11 numeros)

    cy.get('[name="numero"]').type("0271531304785")

   cy.get('input[value="Validar CPF"]').click()
})

it("validate button gerar CPF",  ()=>{

   cy.get('input[value="Gerar CPF"]').click()
})


})


