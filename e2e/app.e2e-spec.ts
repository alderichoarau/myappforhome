import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display navbar with Home, Opinion, Room Tour, Price, Contact and About', () => {
    page.navigateTo();
    expect(page.getNavbarHome()).toEqual('Home');
    expect(page.getNavbarOpinion()).toEqual('Opinion');
    expect(page.getNavbarRoomTour()).toEqual('Room');
    expect(page.getNavbarPrice()).toEqual('Price');
    expect(page.getNavbarContact()).toEqual('Contact');
    expect(page.getNavbarAbout()).toEqual('About');
  });
});
