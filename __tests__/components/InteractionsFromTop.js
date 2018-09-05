const helper = require("protractor-helper");

class InteractionsFromTop {
  constructor() {
    this.searchInputTextField = element(by.css('.interactions input[type="text"]'));
    this.searchButton = element(by.css('.interactions button[type="submit"]'));
  }

  searchForTermAfterClearingTheField(term) {
    helper.clearFieldWhenVisibleAndFillItWithText(this.searchInputTextField, term);
    helper.clickWhenClickable(this.searchButton);
  }
}

module.exports = InteractionsFromTop;
