
import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { RoadmapPage} from '../page/roadmap.page';


test.describe('Roadmap page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
  });

test('ID 4 - Open the path task list on the roadmap page', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickRoadMapLink();

  const roadmapPage = new RoadmapPage(page);
  await roadmapPage.clickDefectCheckbox();
  await roadmapPage.clickFeatureCheckbox();
  await roadmapPage.clickSubProjectCheckbox()
  await roadmapPage.clickApplyButton();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("The path task list", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });

});