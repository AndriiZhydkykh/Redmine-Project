import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly wikiLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.wikiLink = page.locator('#header [class="wiki selected"]');
  }

  async open() {
    await this.page.goto('https://www.redmine.org/');
    await expect(this.page).toHaveURL('https://www.redmine.org/');
    await expect(this.wikiLink).toBeVisible();
  }

}