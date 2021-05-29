module.exports = (on, config) => {
  require('cypress-grep/src/plugin')(config)

  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config)
  }

  return config
}
