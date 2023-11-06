/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('Proceed with order checkout ', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.get('.search-keyword').type('ca')
      cy.wait(2000);

      //You can use alias in cypress to refer to an object you get with the get method.
      //To do so, you use the .as('') method after the .get() method.
      //Example:
      cy.get('.products').as('productList')
      //Selecting an element dinamically
      cy.get('@productList').find('.product').each(($el, index, $list) =>{
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      })
      //Shopping bag
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
    })
  })