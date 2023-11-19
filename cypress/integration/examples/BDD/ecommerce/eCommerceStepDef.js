import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../PageObjects/HomePage"
import ProductPage from "../../../PageObjects/ProductPage"

const homePage = new HomePage()
const productPage = new ProductPage()

var pageData = null;
beforeEach(() => {
    cy.fixture('example').then((data)=>{
        pageData = data
      })
});
//Given I open Ecommerce page
Given('I open Ecommerce page', ()=>{
    cy.visit(Cypress.env('url') + "/angularpractice")
})

//When I add items to cart
When('I add items to cart', ()=>{

    homePage.getShopTab().click()
    pageData.productName.forEach((element)=>{

        cy.selectProduct(element)
      });
    productPage.checkoutBtn().click()
})

//And Validate the total prices
When('Validate the total prices',()=>{
    var sum = 0
    var total = 0

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
})

//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou',()=>{
    
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
})

//When I fill the form details
When('I fill the form details', ()=>{
    homePage.getEditBox().type(pageData.name)
    homePage.getGender().select(pageData.gender)    
})

//Then validate the form behavior
Then('validate the form behavior',()=>{
    homePage.getTwoWaysDataBinding().should('have.value', pageData.name)
    homePage.getEditBox().should('have.attr', 'minlength','2')
    homePage.getEnterprenear().should('be.disabled')
})

//And select the Shop Page
Then('select the Shop Page',()=>{
    homePage.getShopTab().click()
})