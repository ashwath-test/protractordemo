const { element } = require("protractor");

var HomePage = function () {

    // locators
    this.searchField = element(by.css("input[class='search_query form-control ac_input']"));
    this.searchOption = element(by.css("button[class='btn btn-default button-search']"));
    this.logoEl = element(by.css("div#header_logo"));
    this.searchResultMsg = element(by.css("span.heading-counter"));

    // Functions
    this.enterSearchText = async (searchtext) => {
        await this.searchField.sendKeys(searchtext);
    };

    this.selectSearchOption = async () => {
        await this.searchOption.click();
    };

    this.searchResultCount = async () => {
       let text = await this.searchResultMsg.getText();
       return parseInt(text.substring(0,1));
    };

}

module.exports = HomePage;