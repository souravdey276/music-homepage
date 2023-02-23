import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login tests', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form should be valid', () => {
        page.getEmailText().sendKeys('hari123@gmail.com');
        page.getPasswordText().sendKeys('harik');
        browser.sleep(1000)
        let form = page.getForm().getAttribute('class');

     expect(form).toContain('ng-valid');
    });

    it('Login form should be invalid', () => {
        page.getEmailText().sendKeys('');
        page.getPasswordText().sendKeys('');
        browser.sleep(1000)
        
    });

    it('Should set email value to local storage', () => {
        page.getEmailText().sendKeys('hari123@gmail.com');
        page.getPasswordText().sendKeys('hari');
        page.getSubmitButton().click();
    
        let valLocalStorage  = browser.executeScript("return window.localStorage.getItem('user');");
       
        expect(valLocalStorage).toEqual(null);
      
    });
});