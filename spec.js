//import { browser } from "protractor";

describe('Enter name feature',function()
{
    it('should enter name as Lakshmikanthan',function()
    {
        browser.get('https://angularjs.org/');
        browser.manage().window().maximize;
        element(by.model('yourName')).sendKeys('Lakshmikanthan');
        var actualText=element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        //console.log(actualText.
        //document.write(actualText.getText())
        expect(actualText.getText()).toEqual('Hello Lakshmikanthan!');
    });
});
describe('Application title test',function()
{
 it('get title of the calculator app',function()
     {
         browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
         expect(browser.getTitle()).toEqual('Protractor practice website - Calculator');
         browser.driver.sleep(2000);
         element(by.model('first')).sendKeys('Selenium');
         browser.driver.sleep(3000);
     })
})