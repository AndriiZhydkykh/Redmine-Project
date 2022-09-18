import { expect, Locator, Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly registrationLink: Locator;
  readonly searchInput: Locator;
  readonly downloadLink: Locator;
  readonly roadMapLink: Locator;
  readonly issuesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registrationLink=page.locator('#top-menu [href*="register"]');
    this.searchInput=page.locator('[id="q"]');
    this.downloadLink = page.locator('#header [class="download"]');
    this.roadMapLink = page.locator('#header [class="roadmap"]');
    this.issuesLink=page.locator('#header [class="issues"]')
  }
  async clickRegistrationLink() {
    await this.registrationLink.click()
    await expect(this.page).toHaveURL(/.*register/);
  }
  async fillSearchInput() {
    await this.searchInput.fill('Defect');
    await this.page.keyboard.press('Enter');
    await expect(this.page).toHaveURL(/.*search/);
  }
  async clickDownloadLink() {
    await this.downloadLink.click()
    await expect(this.page).toHaveURL(/.*Download/);
  }
  async clickRoadMapLink() {
    await this.roadMapLink.click()
    await expect(this.page).toHaveURL(/.*roadmap/);
  }
  async clickIssuesLink() {
    await this.issuesLink.click()
    await expect(this.page).toHaveURL(/.*issues/);
  }

  
}