///<reference types="cypress"/>

it("Number", () => {

    const number1 = 5

    expect(number1).equal(5); // 1ª forma
    expect(number1).to.equal(5); // 2ª forma
    expect(number1).to.be.equal(5); // 3ª forma
    expect(number1).to.be.not.equal(10); // negação (NÃO PODE SER IGUAL A 10) 

})

it("Work with integer", () =>{

})

it("Work with strings", () =>{

    const name = "Automação de testes com Cypress"
    expect(name).equal("Automação de testes com Cypress"); // validando se o nome é igual
    expect(name).to.be.have.length(31); // informa numero de caracteres 
    expect(name).to.be.contains("Cypress");

        // Expressões Regulares
    expect(name).to.match(/^Automação/);
    expect(name).to.match(/Cypress$/);
})


it("Work with boolean", () =>{
    const value = true;

    expect (value).to.equal(true)
    expect (value).not.to.be.equal(false) // negação

})

it("Work with float", () =>{
    const number1 = 5.4565454;

    expect (number1).to.be.equal(5.4565454)

    // valida acima do valor
    expect (number1).to.be.above(5.4) 

      // valida abaixo do valor
      expect (number1).to.be.below(5.5) 

        // valida considerando margem de erro
    expect (number1).to.be.closeTo(5.4, 0.1) 

})

it("Work with list", () =>{
    const course = [ "Lógica", "WebDriver", "Cypress", "Appium"]

    // valida cursos dentro da lista(list)
    expect(course).to.include.members(["Cypress" , "Lógica"])
})

it("Work with objects", () => {
    const object1 = [1,2,3]
    const object2 = [1,2,3]

    //Compara os objectos que são iguais
    expect(object1).to.be.deep.equal(object2)
})



