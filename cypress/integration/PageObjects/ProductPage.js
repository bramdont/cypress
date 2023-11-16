class ProductPage {

    checkoutBtn(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    productPageCheckoutBtn(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    countryTextBox(){
        return cy.get('#country')
    }
    selectCountry(){
        return cy.get('div.suggestions ul li a')
    }
    termsAndConditionCheckbox(){
        return cy.get('#checkbox2')
    }
    purchaseBtn(){
        return cy.get('input[type=submit]')
    }

}
export default ProductPage;