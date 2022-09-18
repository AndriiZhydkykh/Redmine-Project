import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { DownloadPage} from '../page/download.page';


test.describe('Download page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
  });

test('ID 3 - Open the Latest source code in github on the download page', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickDownloadLink();

  const downloadPage = new DownloadPage(page);
  await downloadPage.clickLatestSourceCodeGithubLink()
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("github code on the github.com", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});