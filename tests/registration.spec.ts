import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { RegistrationPage} from '../page/registration.page';


test.describe('Registration page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
  });

test('ID 1 - Registering a new user with a required field', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickRegistrationLink();

  const registrationPage = new RegistrationPage(page)
  await registrationPage.setUserNameInput();
  await registrationPage.setPasswordInput();
  await registrationPage.setConfirmPasswordInput();
  await registrationPage.setFirstNameInput();
  await registrationPage.setLastNameInput();
  await registrationPage.setEmailInput();
  await registrationPage.clickApplyButton();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("Flash notice", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});