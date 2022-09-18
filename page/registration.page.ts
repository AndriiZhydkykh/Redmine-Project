import { expect, Locator, Page } from '@playwright/test';
import { randomEmail, randomName } from '../helper/script';
export class RegistrationPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly applyButton: Locator;
  readonly flashNoticeConfirmEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user_login');
    this.passwordInput=page.locator('#user_password');
    this.confirmPasswordInput = page.locator('#user_password_confirmation');
    this.firstNameInput=page.locator('#user_firstname');
    this.lastNameInput = page.locator('#user_lastname');
    this.emailInput=page.locator('#user_mail');
    this.applyButton=page.locator('[type="submit"]');
    this.flashNoticeConfirmEmail=page.locator('#flash_notice');

  }

  async setUserNameInput() {
    await this.userNameInput.type(randomName)
  }
  async setPasswordInput() {
    await this.passwordInput.type('2181681A')
  }
  async setConfirmPasswordInput() {
    await this.confirmPasswordInput.type('2181681A')
  }
  async setFirstNameInput() {
    await this.firstNameInput.type('UserName')
  }
  async setLastNameInput() {
    await this.lastNameInput.type('UserLastName')
  } 
  async setEmailInput() {
    await this.emailInput.type(randomEmail); 
  }
  async clickApplyButton() {
    await this.applyButton.click(); 
    await expect(this.page).toHaveURL(/.*login/);
    await expect(this.flashNoticeConfirmEmail).toBeVisible();
  }

}