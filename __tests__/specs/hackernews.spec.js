const helper = require('protractor-helper');

describe('Hackernews kind off app', () => {
  beforeEach(() => browser.get('/'));

  it('renders 100 items in the first visit', () => {
    const tableElements = element.all(by.css('.table .table-row'));

    helper.waitForElementVisibility(tableElements.last());
    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    helper.clickWhenClickable(moreButton);

    helper.waitForElementVisibility(loadingElement);
  });

  it('renders 200 items after clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    helper.clickWhenClickable(moreButton);
    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

    const tableElements = element.all(by.css('.table .table-row'));

    helper.waitForElementVisibility(tableElements.last())
    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    helper.clearFieldWhenVisibleAndFillItWithText(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    helper.waitForElementVisibility(loadingElement);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    helper.clearFieldWhenVisibleAndFillItWithText(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(100);
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    helper.clearFieldWhenVisibleAndFillItWithText(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

    helper.clearFieldWhenVisibleAndFillItWithText(searchInputTextField, 'redux');
    helper.clickWhenClickable(searchButton);

    helper.waitForElementNotToBePresent(loadingElement);
  });

  it('shows only 99 items after dismissing one item', () => {
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    helper.clickWhenClickable(dismissButtonOfFirstItem)

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(99);
  });
});
