import { expect, Locator, Page } from '@playwright/test';

export class DownloadPage{
  readonly page: Page;
  readonly lSourceCodeGithubLink: Locator;
  readonly gitHubCodeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lSourceCodeGithubLink = page.locator('[class="external"][href*="github"]');
    this.gitHubCodeButton = page.locator(' #code-tab');
  }

  async clickLatestSourceCodeGithubLink() {
    await this.lSourceCodeGithubLink.click()
    await expect(this.page).toHaveURL('https://github.com/redmine/redmine');
    await expect(this.gitHubCodeButton).toBeVisible();
  }
}