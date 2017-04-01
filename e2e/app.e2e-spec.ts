import { Angular2ApiPage } from './app.po';

describe('angular2-api App', () => {
  let page: Angular2ApiPage;

  beforeEach(() => {
    page = new Angular2ApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
