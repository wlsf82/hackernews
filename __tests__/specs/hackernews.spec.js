describe('Hackernews kind off app', () => {
  beforeEach(() => browser.get('/'));

  it('renders 100 items in the first visit', () => {
    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    moreButton.click();

    expect(loadingElement.isDisplayed()).toBe(true);
  });

  it('renders 200 items after clicking the More button', () => {
    const moreButton = element(by.css('.interactions button[type="button"]'));

    moreButton.click();

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    expect(loadingElement.isDisplayed()).toBe(true);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));

    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(100);
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'));
    const loadingElement = element(by.className('loading'));

    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();
    searchInputTextField.clear();
    searchInputTextField.sendKeys('redux');
    searchButton.click();

    expect(loadingElement.isPresent()).not.toBe(true);
  });

  it('shows only 99 items after dismissing one item', () => {
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    dismissButtonOfFirstItem.click();

    const tableElements = element.all(by.css('.table .table-row'));

    expect(tableElements.count()).toBe(99);
  });
});
