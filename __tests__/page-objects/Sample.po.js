const helper = require("protractor-helper");

class Page {
  constructor() {
    this.dismissButtonOfFirstItem = element.all(by.css(".table-row .button-inline")).first();
    this.loadingElement = element(by.className("loading"));
    this.moreButton = element(by.css('.interactions button[type="button"]'));
    this.searchButton = element(by.css('.interactions button[type="submit"]'));
    this.searchInputTextField = element(by.css('.interactions input[type="text"]'));
    this.tableElements = element.all(by.css(".table .table-row"));
  }

  searchForTermAfterClearingTheField(term) {
    helper.clearFieldWhenVisibleAndFillItWithText(this.searchInputTextField, term);
    helper.clickWhenClickable(this.searchButton);
  }
}

module.exports = Page;