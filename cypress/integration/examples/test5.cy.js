/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling iframes', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('First testcase', () => {
        //To tell cypress it will work with an iframe
        cy.frameLoaded('#courses-iframe')

        //cy.iframe() is use to interact with elements inside the iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(1000)
        
        //We verify there are two plans
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

        //We validate plans name
        cy.iframe().find('h1[class*="pricing-title"]').each(($el,index,$list) =>{
            const plan = $el.text()
            if(index == 0){
                expect(plan).to.equal('BRONZE')
            }else{
                expect(plan).to.equal('PLATINUM')
            }
        })
    });
});