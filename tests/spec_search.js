
const { browser } = require('protractor');
var HomePage = require('../pages/homepage.js');
var EC = protractor.ExpectedConditions;

describe('Search Products', function () {

    var homepage = new HomePage();

    it('search and validate', async () => {
        // step 1: Load the page
        await browser.get('http://automationpractice.com/index.php');

        //wait page to load / logo to appear
        await browser.wait(EC.visibilityOf(homepage.logoEl), 10000);

        //Validate Title
        expect(browser.getTitle()).toEqual('My Store');

        // step 2: Find the Element and enter search text
        // element(by.css("input[class='search_query form-control ac_input']")).sendKeys('Printed')

        // Step 2 after converting to page object model ref:pages/homepage.js
        await homepage.enterSearchText('Printed');
        //wait for 2 sec
        // await browser.sleep(2000);


        // step 3: Find the element and click search button
        //  element(by.css("button[class='btn btn-default button-search']")).click();

        // step 3
        await homepage.selectSearchOption();

        //wait for 5 sec
        // await browser.sleep(5000);
        // wait for result message to appear 
        await browser.wait(EC.visibilityOf(homepage.searchResultMsg), 10000);

        if (await homepage.searchResultCount() > 0) {

            console.log("Results found")
        }
    })

})