import { browser, element, by } from 'protractor';


export class LoginPage{
    navigateTo(){
        return browser.get('/login');
    }

    getEmailText() {
        return element(by.name('email'));
    }
    getPasswordText() {
        return element(by.name('password'));
    }

    getForm(){
        return element(by.css('#loginForm'));
    }

    getSubmitButton(){
        return element(by.css("button[type='submit']"));
    }
}