import { browser } from 'protractor';
import { RegisterPage } from './register.po';

describe('Register form tests', () => {
    let page: RegisterPage;

    beforeEach(() => {
        page = new RegisterPage();
        page.navigateTo();
    });

    it('Register form should be valid', () => {
        page.getFirstName().sendKeys('hari');
        page.getLastName().sendKeys('krishna');
        page.getEmail().sendKeys('hari123@gmail.com');
       
        page.getPassword().sendKeys('harik');
       
       // let form = page.getForm().getAttribute('class');
        browser.sleep(1000);
       // expect(form).toContain('ng-valid');
    });

    it('Register form should be invalid', () => {
        page.getFirstName().sendKeys('');
        page.getLastName().sendKeys('');
        page.getEmail().sendKeys('');
        
        page.getPassword().sendKeys('');
        browser.sleep(1000)
        //let form = page.getForm().getAttribute('class');

       // expect(form).toContain('ng-invalid');
    });
});