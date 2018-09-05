const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

describe('Hackernews kind off app', () => {
  beforeEach(() => browser.get('/'));

  it('renders 100 items in the first visit', () => {
    const tableElements = element.all(by.css('.table .table-row'));

    browser.wait(EC.visibilityOf(tableElements.last()), DEFAULT_TIMEOUT_IN_MS);
    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    browser.wait(EC.elementToBeClickable(moreButton), DEFAULT_TIMEOUT_IN_MS);
    moreButton.click();

    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('renders 200 items after clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    browser.wait(EC.elementToBeClickable(moreButton), DEFAULT_TIMEOUT_IN_MS);
    moreButton.click();

    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    const tableElements = element.all(by.css('.table .table-row'));

    browser.wait(EC.visibilityOf(tableElements.last()), DEFAULT_TIMEOUT_IN_MS);
    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.elementToBeClickable(searchButton), DEFAULT_TIMEOUT_IN_MS);

    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.elementToBeClickable(searchButton), DEFAULT_TIMEOUT_IN_MS);
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(100);
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.elementToBeClickable(searchButton), DEFAULT_TIMEOUT_IN_MS);

    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    searchInputTextField.clear();
    searchInputTextField.sendKeys('redux');
    searchButton.click();

    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('shows only 99 items after dismissing one item', () => {
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    browser.wait(EC.elementToBeClickable(dismissButtonOfFirstItem), DEFAULT_TIMEOUT_IN_MS);
    dismissButtonOfFirstItem.click();

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(99);
  });
});
