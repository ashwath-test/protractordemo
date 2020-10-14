
var HomePage = require('../pages/homepage.js')
describe('Search Products', function () {

    var homepage = new HomePage();

     it('search and validate', async () => {
        await browser.get('http://automationpractice.com/index.php')

        await homepage.enterSearchText('Printed');
        await browser.sleep(2000);
        await homepage.selectSearchOption();
        await browser.sleep(5000);
    })

})