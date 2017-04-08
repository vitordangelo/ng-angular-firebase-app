import { NgAngularFirebaseAppPage } from './app.po';

describe('ng-angular-firebase-app App', () => {
  let page: NgAngularFirebaseAppPage;

  beforeEach(() => {
    page = new NgAngularFirebaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
