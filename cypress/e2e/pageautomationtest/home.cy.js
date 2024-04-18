describe("test aba home",()=>{
    beforeEach(()=>{
        cy.visit("index.html");
    })

    it("Should  validate title page",  ()=>{
        //valida o titulo da pagina
        cy.title().should("to.be.equal", "Treino Automação de Testes");
        cy.wait(5000)
    })

    it("validate link Formulário de Cadastro",()=>{
        cy.get('[href="http://goo.gl/DNVUR"]').click()


    })

})


//page geral
// describe("test aba home",()=>{

//     it("Should  validate  page",  ()=>{
//         cy.visit("index.html");

//         //valida o titulo da pagina
//         cy.title().should("to.be.equal", "Treino Automação de Testes");
//         cy.wait(5000)
//     


//         cy.get('[href="http://goo.gl/DNVUR"]').click()


//     })

// })