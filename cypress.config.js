const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
