const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //video:true,
     baseUrl:'http://localhost:4000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
