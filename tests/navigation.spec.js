const { test, expect } = require('../pages/baseTest');
const testData = require('../data/loginData.json');

test.describe('Navigation Scenarios', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    });

    test('User should be able to navigate to the PIM module', async ({ dashboardPage, page }) => {
        await dashboardPage.clickPIM();
        await expect(page).toHaveURL(/.*pim/);
    });
});