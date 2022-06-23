const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '263jf8',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {},
    viewportHight: 1200,
    viewportWidth: 1000,
    specPattern: 'src/**/*spec.{js,jsx,ts,tsx}',
  },
})
