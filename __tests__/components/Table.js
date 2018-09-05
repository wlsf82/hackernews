class Table {
  constructor() {
    this.dismissButtonOfFirstItem = element.all(by.css(".table-row .button-inline")).first();
    this.items = element.all(by.css(".table .table-row"));
  }
}

module.exports = Table;
