
import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { IssuePage} from '../page/issues.page';


test.describe('Issues page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
  });

test('ID 5 - Open the list of all closed issues on the issues page', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickIssuesLink();

  const issuePage = new IssuePage(page);
  await issuePage.chooseClosedStatusInSelect();
  await issuePage.clickApplyButton();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("The list of closed issues", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});