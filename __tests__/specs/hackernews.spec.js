const helper = require('protractor-helper');

const Page = require('../page-objects/Sample.po.js');

describe('Hackernews kind off app', () => {
  const page = new Page();

  beforeEach(() => browser.get(page.relativeUrl));

  it('renders 100 items in the first visit', () => {
    helper.waitForElementVisibility(page.table.items.last());
    expect(page.table.items.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    helper.clickWhenClickable(page.interactionsFromBottom.moreButton);

    helper.waitForElementVisibility(page.loading.ellipsis);
  });

  it('renders 200 items after clicking the More button', () => {
    helper.clickWhenClickable(page.interactionsFromBottom.moreButton);
    helper.waitForElementVisibility(page.loading.ellipsis);
    helper.waitForElementNotToBePresent(page.loading.ellipsis);

    helper.waitForElementVisibility(page.table.items.last());
    expect(page.table.items.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    page.interactionsFromTop.searchForTermAfterClearingTheField('react');

    helper.waitForElementVisibility(page.loading.ellipsis);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    page.interactionsFromTop.searchForTermAfterClearingTheField('react');

    helper.waitForElementVisibility(page.loading.ellipsis);
    helper.waitForElementNotToBePresent(page.loading.ellipsis);

    expect(page.table.items.count()).toBe(100);
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    page.interactionsFromTop.searchForTermAfterClearingTheField('react');

    helper.waitForElementVisibility(page.loading.ellipsis);
    helper.waitForElementNotToBePresent(page.loading.ellipsis);

    page.interactionsFromTop.searchForTermAfterClearingTheField('redux');

    helper.waitForElementNotToBePresent(page.loading.ellipsis);
  });

  it('shows only 99 items after dismissing one item', () => {
    helper.clickWhenClickable(page.table.dismissButtonOfFirstItem);

    expect(page.table.items.count()).toBe(99);
  });
});
