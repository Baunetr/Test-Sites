import { WtfPage } from './app.po';

describe('wtf App', () => {
  let page: WtfPage;

  beforeEach(() => {
    page = new WtfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
