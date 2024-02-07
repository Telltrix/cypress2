const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportHeight: 880,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalWebKitSupport: true,
    baseUrl: 'https://barrigarest.wcaquino.me',
  },
})
