describe('Try to test World Nerds site', ()=> {
    beforeEach( ()=> {
        cy.visit('https://word-nerds-client.herokuapp.com')    
    }) 

    it.only('verify there is a link to Sign up',()=>{
        cy.contains('Sign up now').should('have.attr','href','/register')
    })

    it('Verify invalid user', ()=>{
        cy.get('#usernameInput')
            .type('abcdefghijklmnopqsrt')
            .clear()
        cy.get('#passwordInput').type('hahahah')
        cy.get('form').submit();    
        cy.get('.error').should('contain','invalid username')
    })

    it('verify invalid username or password',()=>{
        cy.get('#usernameInput')
            .type('asdqwe')
        cy.get('#passwordInput').type('hahahah')

        cy.get('form').submit();

        cy.get('.usernameOrPasswordError').should('contain','Incorrect Username or Password.')
    })
} )