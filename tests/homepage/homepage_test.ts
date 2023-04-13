Feature('Homepage');

Scenario('Verify page elements',  ({ I, homePage }) => {
    I.amOnPage('http://demo.billclaytor.com');
    I.see('Developer Bookshelf');
    homePage.verifyPageElements();
});
