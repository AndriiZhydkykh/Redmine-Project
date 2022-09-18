import { expect, Locator, Page } from '@playwright/test';

export class IssuePage {
  readonly page: Page;
  readonly chooseStatus: Locator;
  readonly closedStatusSelect: Locator;
  readonly applyButton: Locator;
  readonly firstClosedIssueInList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chooseStatus = page.locator('#operators_status_id');
    this.applyButton= page.locator('[class="icon icon-checked"]')
    this.firstClosedIssueInList= page.locator('(//*[@class="status"][text()="Closed"])[1]')
  }
  
  async chooseClosedStatusInSelect() {
    await this.chooseStatus.click();
    await this.chooseStatus.selectOption("c");
  }
  async clickApplyButton() {
    await this.applyButton.click();
    await expect(this.firstClosedIssueInList).toBeVisible();
    
  }
  
}