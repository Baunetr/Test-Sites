import { EpIntegrationsPagePage } from './app.po';

describe('ep-integrations-page App', () => {
  let page: EpIntegrationsPagePage;

  beforeEach(() => {
    page = new EpIntegrationsPagePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
