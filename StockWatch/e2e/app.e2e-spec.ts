import { StockWatchPage } from './app.po';

describe('stock-watch App', () => {
  let page: StockWatchPage;

  beforeEach(() => {
    page = new StockWatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
