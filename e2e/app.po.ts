import { $$, browser } from 'protractor';

export class Angular2FullStackPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarHome() {
    return $$('app-root a').get(0).getText();
  }

  getNavbarRoom() {
    return $$('app-room b').get(1).getText();
  }

  getNavbarRestaurant() {
    return $$('app-restaurant c').get(2).getText();
  }

  getNavbarOpinion() {
    return $$('app-opinion d').get(3).getText();
  }

  getNavbarPrice() {
    return $$('app-price e').get(4).getText();
  }

  getNavbarLocalisation() {
    return $$('app-localisation f').get(5).getText();
  }

  getNavbarContact() {
    return $$('app-contact g').get(6).getText();
  }

  getNavbarAbout() {
    return $$('app-about h').get(7).getText();
  }
}
