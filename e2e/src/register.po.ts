import { browser, element, by, ElementFinder } from 'protractor';


export class RegisterPage{
    navigateTo(){
        return browser.get('/register');
    }

    getFirstName() {
        return element(by.name('firstname'));
    }
    getLastName() {
        return element(by.name('name'));
    }
    getEmail() {
        return element(by.name('email'));
    } 
    
    getPassword() {
        return element(by.name('password'));
    }
    getForm(){
        return element(by.css('#registerForm'));
    }

    getSubmitButton(){
        return element(by.css("button[type='submit']"));
    }
}