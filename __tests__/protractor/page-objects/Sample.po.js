const InteractionsFromBottom = require('../components/InteractionsFromBottom');
const InteractionsFromTop = require('../components/InteractionsFromTop');
const Loading = require('../components/Loading');
const Table = require('../components/Table');

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