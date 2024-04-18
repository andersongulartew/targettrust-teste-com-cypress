
// describe("test aba webelements", ()=>{

//     beforeEach(()=>{
//         cy.visit("elementsweb.html");
//     })

//     it("should Should  validate title page",  ()=>{
//         //valida o titulo da pagina
//         cy.title().should("to.be.equal", "WebElements Test Page Lab");

//     })

//     it("Should be validate Hello World in text field", () =>{
//         cy.get('input[name="txtbox1"]')
//             .type("Hello world")
//             .should("have.value", "Hello world")

//     })

//     it("Should  validate  radio   ", () =>{
//         cy.get('[type="radio"]').check("Radio 2")
//     })

//     it("Should  validate   checkbox  ", () =>{
//         cy.get('[type="checkbox"]').check("Check 3")
//         cy.get('[type="checkbox"]').check("Check 1")


//     })


//     it('Should  validate button iframe', () => {
//         cy.visit('https://antoniotrindade.com.br/treinoautomacao/frame.html')
//         cy.get('#btniframe').click()
//         2023
//       })

//     it("Should  validate DropDown List Single ; DropDown List Multi Selected  ", () =>{
//         cy.get('select[name="dropdownlist"]').select('item2')
//         cy.get('select[name="dropdownlist"] [value="item4"]')


//         cy.get('select[name="multiselectdropdown"]').select(['item2'])


//     })

//     it("Should  validate button Utilizando POP UP  ", () =>{
//         cy.get('input[name="alertbtn"]').click() // alert
//         cy.get('input[name="confirmbtn"]').click() // confirm
//         cy.get('input[id="promptBtn"]').click() // prompt


//     })


// })





//   PAGE GERAL
describe("test aba webelements", ()=>{

    it(" Should  validate  page",  ()=>{
         cy.visit("elementsweb.html");
        //valida o titulo da pagina
        cy.title().should("to.be.equal", "WebElements Test Page Lab")

        cy.get('input[name="txtbox1"]')
        .type("Hello world")
        .should("have.value", "Hello world")

        cy.get('[name="radioGroup1"]').check("Radio 2").should('be.checked')

        //RADIO BUTTON
        //Seleciona o primeiro e valida que está checked
        cy.get("input[name='radioGroup1']")
            .first().check().should("be.checked");

        //Seleciona o terceiro e valida que está checked
        cy.get("input[name='radioGroup1']")
            .check("Radio 3").should("be.checked");

        //Seleciona o último e valida que está checked
        cy.get("input[name='radioGroup1']")
            .last().check().should("be.checked");

        //Valida quantos radios existem com este mesmo name
        cy.get("input[name='radioGroup1']").should("have.length", 4);

        // CHECK BOX
         //Valida quantos checkbox existem
        cy.get('[name="chkbox"]').check("Check 3").should('be.checked')
        cy.get('[type="checkbox"]').check("Check 1").should('be.checked')

        // marca o check 2 e depois desmarca
        cy.get("input[name='chkbox']")
        .check("Check 2")
        .should("be.checked")
        .uncheck("Check 2")  //desmarca
        .should("not.be.checked");

        // marca todos e depois desmarca o 4
        cy.get("input[name='chkbox']")
        .check( {multiple:true} )
        .should("be.checked")
        .uncheck("Check 4")
        .should("not.be.checked")


        // SELECT
         //seletor do componente pai
        cy.get("select[name='dropdownlist']")
            .select("Item 2")
            .should("have.value", "item2");

        //Selector da lista com 10 itens
        cy.get("select[name='dropdownlist'] option")
            .first()
            .should("have.value", "item1");

            cy.get("select[name='dropdownlist'] option")
            .should("have.length", 10);

        //Selector por um item específico
        cy.get("select[name='dropdownlist'] [value='item4']")
            .should("have.value", "item4");

        cy.get("select[name='dropdownlist'] option")
            .should("have.length", 10);
        // varrer os componentes validando os 10 itens
        cy.get("select[name='dropdownlist'] option").then($list => {
            const itens = [];
            $list.each(function() {
                itens.push(this.innerText)
            })

            expect(itens).to.include.members(['Item 1', 'Item 2', 'Item 3', 'Item 4','Item 5', 
                'Item 6','Item 7', 'Item 8', 'Item 9', 'Item 10'])
        })

        cy.get("select[name='multiselectdropdown']")
        .select(["Item 2", "Item 5", "Item 9"]);

         // Identificar os 3 elementos selecionados
         cy.get("select[name='multiselectdropdown']").then($el => {
            expect($el.val()).to.have.length(3);
            expect($el.val()).to.be.deep.equal(["item2", "item5", "item9"])
        })


        cy.get('input[name="alertbtn"]').click() // alert
        cy.get('input[name="confirmbtn"]').click() // confirm
        //cy.get('input[id="promptBtn"]').click() // prompt

    })


})

