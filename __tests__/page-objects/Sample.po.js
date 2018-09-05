const InteractionsFromBottom = require('../components/InteractionsFromBottom.js');
const InteractionsFromTop = require('../components/InteractionsFromTop.js');
const Loading = require('../components/Loading.js');
const Table = require('../components/Table.js');

class Page {
  constructor() {
    this.relativeUrl = '/';

    this.interactionsFromBottom = new InteractionsFromBottom();
    this.interactionsFromTop = new InteractionsFromTop();
    this.loading = new Loading();
    this.table = new Table();
  }
}

module.exports = Page;