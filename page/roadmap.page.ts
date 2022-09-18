import { expect, Locator, Page } from '@playwright/test';

export class RoadmapPage {
  readonly page: Page;
  readonly defectCheckbox: Locator;
  readonly featureCheckbox: Locator;
  readonly subProjectCheckbox: Locator;
  readonly applyButton: Locator;
  readonly firstPathResultInList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defectCheckbox=page.locator('[name*="tracker"] >> nth=0');
    this.featureCheckbox=page.locator('input[value="2"]');
    this.subProjectCheckbox=page.locator('#with_subprojects[type="checkbox"]');
    this.applyButton=page.locator('[class="button-small"]');
    this.firstPathResultInList=page.locator('(//*[@class="subject"]/a[contains(text(), "Patch")])[1]');
  }


  async clickDefectCheckbox(){
    await this.defectCheckbox.click();
  }
  async clickFeatureCheckbox(){
    await this.featureCheckbox.click();
  }
  async clickSubProjectCheckbox(){
    await this.subProjectCheckbox.click();
  }
  async clickApplyButton(){
    await this.applyButton.click();
    await expect(this.firstPathResultInList).toBeVisible()
  }
  
  
}