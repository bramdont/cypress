/// <reference types="Cypress" />

var pageData = null
describe('Workin with Fixtures and Custom commands', () => {
    before(()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then((data)=>{
            pageData=data
        })
    })

    /*before(function () {
        // runs once before all tests in the block
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then(function (data) {
          pageData = data
          cy.log(this.date)
        })
      })*/
    /*beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then(function(data){
            this.data=data
        })
    }) */

    it('My first testcase', () => {
        cy.get('input[name="name"]:nth-child(2)').type(pageData.name)
        cy.get('select').select(pageData.gender)

    });
});