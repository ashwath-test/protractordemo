
var HomePage = function () {

    // locators
    this.searchField = element(by.css("input[class='search_query form-control ac_input']"));
    this.searchOption = element(by.css("button[class='btn btn-default button-search']"));

    // Functions
    this.enterSearchText = async (searchtext) => {
        await this.searchField.sendKeys(searchtext);
    };

    this.selectSearchOption = async () => {
        await this.searchOption.click();
    };

}

module.exports = HomePage;