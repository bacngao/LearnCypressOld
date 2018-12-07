describe('Log In Fitbit with Csrf token', ()=> {
    it('parse Html code to get CSRF token', ()=> {
        
        cy.request('https://www.fitbit.com/my/login')
            .its('body')
            .then( (body_response) => {                
                const $html = Cypress.$(body_response)                
                const csrf = $html.find('input[name=csrfToken]').val()
         
                cy.log('CSRF value is :' + csrf)


                cy.request({
                    method:'POST',
                    url:'https://www.fitbit.com/my/login',
                    failOnStatusCode:false,
                    form:true,
                    body:{
                        login:'Log In',
                        includeWorkflow:'',
                        redirect:'',
                        switchToNonSecureOnRedirect:'',
                        csrfToken:csrf,
                        disableThirdPartyLogin:false,
                        email:'autofit20@yopmail.com',
                        password:'Abcd1234',
                        rememberMe:true
                    }
                })
              
            })
        cy.visit("https://www.fitbit.com")
        cy.get('.photo').should('exist')
        })

    it.skip('get header page', ()=>{
            cy.request('https://www.fitbit.com/my/login')
                .its('headers').then (($header)=>{
                    cy.log($header)
                })
    })            
    

} )