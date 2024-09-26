const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1960,
  viewportHeight: 1080,
  pageLoadTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
