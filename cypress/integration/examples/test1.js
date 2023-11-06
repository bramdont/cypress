/// <reference types="Cypress" />

describe('My First Test suite', () => {
    it('Visit the Web site', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.wait(1000);

      cy.get('.search-keyword').type('ca')
      cy.wait(2000);
      //To find only visibles elements of a particular class [cy.get('.product:visible')]
      //var product = cy.get('.product:visible')
      //product.should('have.length',4)
      //product[1].click()
      //cy.wait(1000);

      //You can use alias in cypress to refer to an object you get with the get method.
      //To do so, you use the .as('') method after the .get() method.
      //Example:
      cy.get('.products').as('productList')

      //Selecting elements by it array index [.eq(0)] and using alias [.as()] to refer to the object
      cy.get('@productList').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      //Selecting an element dinamically
      cy.get('@productList').find('.product').each(($el, index, $list) =>{
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      })
      //Manually managing async 
      cy.get('.brand').then(function(logoElement) {
        cy.log(logoElement.text())
        cy.get('.brand').should('have.text','GREENKART')
      })
    })
  })