const { defineConfig } = require("cypress");
//Both required for cucumber execution
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on)
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents,
    env : {
      url : "https://rahulshettyacademy.com/"
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    defaultCommandTimeout: 10000,
    retries : {
      runMode: 1,
      openMode: 1
    }
  },
});
