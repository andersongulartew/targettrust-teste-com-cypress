const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao/'
  },
  video:false
});


