const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { LeavePage } = require('../pages/LeavePage');
const loginData = require('../data/loginData.json');

test.describe('Leave Module Scenarios', () => {
    let loginPage;
    let dashboardPage;
    let leavePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        leavePage = new LeavePage(page);

        await loginPage.goto();
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);
        
        await page.click('text=Leave');
    });
    test.skip('Should verify validation message when leave type is missing', async () => {
        await leavePage.page.click(leavePage.applyLink);
        await leavePage.page.click(leavePage.applyButton);
        const errorMessage = leavePage.page.locator('.oxd-input-field-error-message').first();
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Required');
    });
});