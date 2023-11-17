const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      url : "https://rahulshettyacademy.com/"
    },
    specPattern: 'cypress/integration/examples/*.js',
    defaultCommandTimeout: 10000,
    retries : {
      runMode: 1,
      openMode: 1
    }
  },
});
