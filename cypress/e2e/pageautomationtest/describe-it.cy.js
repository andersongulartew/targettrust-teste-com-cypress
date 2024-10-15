///<reference types="cypress"/>

describe("Test grouper A", () => {

    it("My first test", () => {
        cy.visit("https://antoniotrindade.com.br/treinoautomacao/")
    })

    it("My second test", () => {
        
    })
})

describe("Test grouper B", () => {


    describe("Test subgroup B", () => {

        it("My third test", () => {

        })
    })

    it("My fourth test", () => {

    })
})

