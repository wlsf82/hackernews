const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '263jf8',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    viewportHight: 1200,
    viewportWidth: 1000,
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
})
