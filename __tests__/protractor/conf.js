const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
  baseUrl: 'http://localhost:3000',
  specs: ['./specs/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=1024,768']
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      })
    );
  }
};
