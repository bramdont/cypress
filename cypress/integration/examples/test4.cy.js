/// <reference types="Cypress" />

describe('Managing PopUp and child window', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('Managing alert', () => {
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //Validate the popup alert string
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Validate popup confirm window alert string
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    });
    
    //Handling tab windows as child windows
    it('Handling tab window', () => {
        //invoke method is a jquery method we run in runtime. 
        //In this case, we call the remove attribute (removeAttr) to remove the target attribute
        //from the button #opentab. This is necessary because cypress does not handle multiple tabs,
        //so we remove the target attribute, so the new url open in the same tab we're working on.
        cy.get('#opentab').invoke('removeAttr','target').click()

        //When the url change, we need to let cypress know about it using cy.origin() function.
        //Evere other action we need to perform in the new url needs to be wrapped inside this function.
        cy.origin('https://www.qaclickacademy.com/', ()=> {
            cy.get('#navbarSupportedContent [href*="about.html"]').click()
            cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ')
        })
    });

    //Iterating in table
    it('Iterating in table and finding siblins', () => {
        //For this locator, we select the entire table, and travel from parent tr to child td (table[name="courses"] tr td).
        //Using :nth-child(2) we are telling the locator to select only the second column.
        //We iterate through the table (second column) to find the python course.
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) =>{
            const courseName = $el.text()
            if(courseName.includes('Python')){
                //We select again the second column and get to the one we are using index variable (.eq(index)).
                //After that, we use the .next() method to move to the td next to where we are.
                //Finally, we use .then() cypress method to resolve the promise and do the assertion
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        })
    });

    it('Handling mouseover', () => {
        //We use a jquery method using .invoke() to show hidden element.
        //Jquery work with inmediatly parent of the object. This is the reason we use the
        //.invoke() method on the div.mouse-hover-content object instead of the Mouse hover button.
       
        /*
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('contain','#top')
        */

        //We can use force argument in click() method in order to click on hidden element
        //This is usefull when you need to perform mouse hover and the element appears
        cy.contains('Top').click({force:true})
        cy.url().should('contain','#top')

    });

});
