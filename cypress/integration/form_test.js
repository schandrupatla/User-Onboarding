describe("User-Boarding app", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3004/");
    });
    const userInput = () => cy.get('input[name="username"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const userCheckbox = () => cy.get('input[name="terms_of_service"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

  
    // here go our tests
    
    it("Proper elements are sowing on the screen", ()=>{
        userInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        userCheckbox().should("exist");

    })
    // //username
    it("can type in the username", ()=>{
        userInput()
            .should("have.value", "")
            .type("Sridevi")
             .should("have.value", "Sridevi")
              //.should("match", /sridevi/i)
            //   cy.contains(userInput(), /sridevi/i)//case doesn't matter
    })
 
    //email
    it("can type in the email", ()=>{
        emailInput()
            .should("have.value", "")
            .type("sriluanil@yahoo.com")
            .should("have.value", "sriluanil@yahoo.com")
            // cy.contains("SRILUANIL@YAHOO>COM/i")//case doesn't matter
    })

    //password
    it("can type in the password", ()=>{
        passwordInput()
            .should("have.value", "")
            .type("12345678")
            .should("have.value", "12345678")
    })
    
    //Terms_of_service--->checkBox
    it("can type select check box", ()=>{
        userCheckbox()
            // .click()
            // .should("have.value", "on")
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    // //submit button
     it("can submit the form data", ()=>{
       //before submit
             // button is disabled is true
             submitBtn().should("be.disabled");
             // type in the username field
             userInput().type("SRIDEVI");
             // button is disabled is true
             submitBtn().should("be.disabled");
             // empty the username field
            userInput().clear();
             // type in the email field
             emailInput().type("SRILUANIL@YAHOO.COM");
             // button is disabled is true
             submitBtn().should("be.disabled");
             // type in the password field
             passwordInput().type("12345678");
             // button is disabled is true
             submitBtn().should("be.disabled");
             // type in the username field
             userInput().type("SRIDEVI");
             // button is disabled is false
             submitBtn().should("not.be.disabled");
             submitBtn().click();

    //  //After submit
             userInput().should("have.value","")
         emailInput().should("have.value","")
             passwordInput().should("have.value","")
                // button is disabled is true
             submitBtn().should("be.disabled");
     })


})//end of describe