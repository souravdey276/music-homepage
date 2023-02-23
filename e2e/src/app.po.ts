import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

 
    getHeaderH3() : ElementFinder
    {
       return element(by.tagName('app-body h3'));
    }
  
   getHeaderH3count() 
    {
      let headers=element.all(by.css('app-body h3'));
       return headers.count();
    }
  
    getHeaderText() {
      return element(by.css('app-body h3')).getText() as Promise<string>;
    } 
  }
