import { TradeYourWastePage } from './app.po';

describe('trade-your-waste App', () => {
  let page: TradeYourWastePage;

  beforeEach(() => {
    page = new TradeYourWastePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
