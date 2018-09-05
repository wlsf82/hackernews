const helper = require('protractor-helper');

const Page = require('../page-objects/Sample.po.js');

describe('Hackernews kind off app', () => {
  const page = new Page();

  beforeEach(() => browser.get('/'));

  it('renders 100 items in the first visit', () => {
    helper.waitForElementVisibility(page.tableElements.last());
    expect(page.tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    helper.clickWhenClickable(page.moreButton);

    helper.waitForElementVisibility(page.loadingElement);
  });

  it('renders 200 items after clicking the More button', () => {
    helper.clickWhenClickable(page.moreButton);
    helper.waitForElementVisibility(page.loadingElement);
    helper.waitForElementNotToBePresent(page.loadingElement);

    helper.waitForElementVisibility(page.tableElements.last())
    expect(page.tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    page.searchForTerm('react');

    helper.waitForElementVisibility(page.loadingElement);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    page.searchForTerm('react');

    helper.waitForElementVisibility(page.loadingElement);
    helper.waitForElementNotToBePresent(page.loadingElement);

    expect(page.tableElements.count()).toBe(100);
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    page.searchForTerm('react');

    helper.waitForElementVisibility(page.loadingElement);
    helper.waitForElementNotToBePresent(page.loadingElement);

    page.searchForTerm('redux');

    helper.waitForElementNotToBePresent(page.loadingElement);
  });

  it('shows only 99 items after dismissing one item', () => {
    helper.clickWhenClickable(page.dismissButtonOfFirstItem);

    expect(page.tableElements.count()).toBe(99);
  });
});
