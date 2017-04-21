import { $$, browser } from 'protractor';

export class Angular2FullStackPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarHome() {
    return $$('app-root a').get(0).getText();
  }

  getNavbarAbout() {
    return $$('app-root a').get(1).getText();
  }

  getNavbarOpinion(){
    return $$('app-root a').get(2).getText();
  }

  getNavbarRoomTour(){
    return $$('app-root a').get(3).getText();
  }  
}
