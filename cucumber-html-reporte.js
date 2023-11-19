const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html/report-cucumber.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows server",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Testsuite", value: "Cypress course" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 18th 2023, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 18th 2023, 02:56 PM EST" },
    ],
  },
});