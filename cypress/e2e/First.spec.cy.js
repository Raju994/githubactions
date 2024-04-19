

describe("This is my first run",()=>{
    
    it("Open CDK Global",()=>{

        cy.visit("https://www.cdkglobal.com/login");

       cy.url().should('eq','https://www.cdkglobal.com/login')
      
       cy.get('#_evidon-decline-button').click()
       cy.wait(1000)
       cy.get('.hs-collapse-toggle').click()
       
       cy.wait(1000)
       cy.get('.block.font-semi').click()
       
       
    
       })
       

    })

