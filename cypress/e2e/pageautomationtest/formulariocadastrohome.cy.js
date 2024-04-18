describe("Work in formulario", ()=>{

    beforeEach(()=>{
        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSdG_H12f9gj-xS0EiotvfIlZ4MByb0cN1Dg82iXsqcXw5ytgA/viewform?sid=71a5c53337c240a3&token=qYOezjwBAAA.00UAj48xXf7fhZMcuCe8rg.4L0x0fdrs_8QW8t6fe5WaQ");

    })
it.only("to fill in name",()=>{

    cy.get('input[type="text"]')
    .type("AndersonWodnoff")
})

it("to fill in email",()=>{

    cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
    .type("andersonwodnoff@hotmail.com")
})

it("to fill in cpf",()=>{

    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
    .type("02715313047")
})

it("to fill in cell phone",()=>{

    cy.get(':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
    .type('5198577517')
})

it("to fill in tecnicas de testes",()=>{

    cy.get('#i25').click()
})

it( "validate button enviar",()=>{
    cy.contains('span', 'Enviar').click()

})

})


// TESTES JUNTOS

// describe("teste aba home link formulario ", ()=>{

// it("to fill in name",()=>{
//     cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSdG_H12f9gj-xS0EiotvfIlZ4MByb0cN1Dg82iXsqcXw5ytgA/viewform?sid=71a5c53337c240a3&token=qYOezjwBAAA.00UAj48xXf7fhZMcuCe8rg.4L0x0fdrs_8QW8t6fe5WaQ");


//     cy.get('input[type="text"]').type("Anderson Wodnoff")

//     cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
//     .type("andersonwodnoff@hotmail.com")

//     cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
//     .type("0271531304789")

//     cy.get(':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
//     .type('51985776172')
    

//     cy.get('#i25').click()

//     cy.contains('span', 'Enviar').click()

    
// })

// })


