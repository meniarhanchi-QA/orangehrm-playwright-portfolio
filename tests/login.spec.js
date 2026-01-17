const { test, expect } = require('../pages/baseTest');
const testData = require('../data/loginData.json');

test.describe('OrangeHRM Login Scenarios', () => {

    test('User should be able to login with valid credentials', async ({ loginPage, page }) => {
        await loginPage.goto();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
        await expect(page).toHaveURL(new RegExp(testData.validUser.expectedUrl));
    });

    test.skip('User tries to login with invalid password', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
        await expect(loginPage.page.getByText(testData.invalidUser.errorMessage)).toBeVisible();
    });

});