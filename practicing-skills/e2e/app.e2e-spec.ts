import { PracticingSkillsPage } from './app.po';

describe('practicing-skills App', () => {
  let page: PracticingSkillsPage;

  beforeEach(() => {
    page = new PracticingSkillsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
