/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";
import ProductPage from "../PageObjects/ProductPage";

var pageData = null
describe('Workin with Fixtures and Custom commands', () => {
    before(()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then((data)=>{
            pageData=data
        })
    })
    afterEach(() => {
        cy.screenshot()
      });
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
        Cypress.config('defaultCommandTimeout', 8000)
        var sum = 0
        var total = 0
        const homePage = new HomePage();
        const productPage = new ProductPage();
        homePage.getEditBox().type(pageData.name)
        homePage.getGender().select(pageData.gender)
        homePage.getTwoWaysDataBinding().should('have.value', pageData.name)
        homePage.getEditBox().should('have.attr', 'minlength','2')
        homePage.getEnterprenear().should('be.disabled')
        homePage.getShopTab().click()

        pageData.productName.forEach((element)=>{
            cy.selectProduct(element)
        })

        productPage.checkoutBtn().click()

        productPage.getSubtotal().each(($el,index,$list) =>{
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        })
        productPage.getTotal().then((element)=>{
            const totalAmount = element.text()
            var res = totalAmount.split(" ")
            res = res[1].trim()
            total=res
            cy.log(total)
            expect(Number(sum)).to.equal(Number(total))
        })
        
        
        productPage.productPageCheckoutBtn().click()
        productPage.countryTextBox().type('United State')
        productPage.selectCountry().click()
        productPage.selectCountry().click()
        productPage.termsAndConditionCheckbox().check({force:true})
        productPage.purchaseBtn().click()

        productPage.getSuccessMessage().then((element)=>{
            const successMessage = element.text()
            expect(successMessage.includes('Success!')).to.be.true
        })
        
        


    });

});