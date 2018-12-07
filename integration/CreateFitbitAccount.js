describe('Create Fitbit Account and Test', () => {
    it('Open Sign Up page and check focus', ()=>{
        cy.visit('https://www.fitbit.com/my/signup') 
        cy.focused().should('have.class','field email')
    })
    it("Input email and password to create new account", () =>{
        cy.get('[name=email]:first')
            .type('abc1234@yopmail.com')
            .should('have.value','abc1234@yopmail.com')

        cy.get('[name=password]').first()
            .type('Abcd1234@')
            .should('have.value','Abcd1234@')
    })
}) 