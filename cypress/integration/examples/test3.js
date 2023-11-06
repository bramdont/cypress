/// <reference types="Cypress" />
describe('Exercise using checkbox, dropdown list, etc', () => {
    it('Using checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //Selecting checkbox by it ID, mark it as checked, and verifying if checked and the value is option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //Selecting checkbox by it ID, unchecking the checkbox and verifying the checkbox is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Selecting checkbox by it ID and checking only checkboxes with value ['option2','option3']
        cy.get("input[type='checkbox']").check(['option2','option3'])
    });

    it('static dropdown list', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
    });

});