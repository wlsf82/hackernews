# Hacker News

From "[The Road to learn React](https://leanpub.com/the-road-to-learn-react)" book.

## Installation

Run `yarn install` to install de project and dev dependencies.

## Starting the app

Run `yarn start` to start the application.

> After starting the app it should be automatically opened in the default browser.

## Running tests

Run `yarn test` to run the automated unit tests.

Run `yarn run test:e2e:cypress` to run the Cypress end-to-end tests.

Run `yarn run test:e2e:protractor` to run the Protractor end-to-end tests.

> Note: local server needs to be up and running.

### Running end-to-end tests on CI

Run `yarn run ci:cypress` to run the Cypress end-to-end tests on CI mode.

Run `yarn run ci:protractor` to run the Protractor end-to-end tests on CI mode.

> Here CI mode means that a local server will be automatically started before the tests run, and the server will be automatically shut down when the tests are finished.

## Build status

The build status based on execution of unit and end-to-end tests can be found below.

[![Build Status](https://semaphoreci.com/api/v1/wlsf82/hackernews/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/hackernews)
