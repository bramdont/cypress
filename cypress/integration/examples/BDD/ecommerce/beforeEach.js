var pageData = null;
beforeEach(() => {
    cy.fixture('example').then(function (data) {
        pageData = data
      })
});

