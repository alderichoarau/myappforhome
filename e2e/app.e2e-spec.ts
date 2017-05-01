import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display navbar with Home, Room, Restaurant, Opinion, Price, Localisation, Contact and About', () => {
    page.navigateTo();
    expect(page.getNavbarHome()).toEqual('Home');
    expect(page.getNavbarRestaurant()).toEqual('Restaurant');
    expect(page.getNavbarOpinion()).toEqual('Opinion');
    expect(page.getNavbarPrice()).toEqual('Price');
    expect(page.getNavbarLocalisation()).toEqual('Localisation');
    expect(page.getNavbarContact()).toEqual('Contact');
    expect(page.getNavbarAbout()).toEqual('About');
  });
});
