import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly taskCheckbox: Locator;
  readonly wikiPageCheckbox: Locator;
  readonly applyButton: Locator;
  readonly firstTaskSearchResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.taskCheckbox = page.locator('#issues');
    this.wikiPageCheckbox=page.locator('#wiki_pages');
    this.applyButton=page.locator('[name="commit"]');
    this.firstTaskSearchResult=page.locator('(//*[@class="highlight token-0"][text()="Defect"])[1]');
  }

  async checkTaskCheckbox() {
    await this.taskCheckbox.check();
  }
  async checkWikiPageCheckbox() {
    await this.wikiPageCheckbox.click();
  }
  async clickApplyButton() {
    await this.applyButton.click()
    await expect(this.firstTaskSearchResult).toBeVisible();
  } 
}