import { EpSupportPortalPage } from './app.po';

describe('ep-support-portal App', () => {
  let page: EpSupportPortalPage;

  beforeEach(() => {
    page = new EpSupportPortalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
