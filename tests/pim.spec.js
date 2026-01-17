const { test, expect } = require('../pages/baseTest');
const testData = require('../data/loginData.json');

test.describe('PIM Module Scenarios', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    });

    test('Should add a new employee successfully', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.clickPIM();

        const fName = 'John';
        const lName = 'Doe';
        await pimPage.addEmployee(fName, lName);

        await expect(pimPage.page.locator(pimPage.personalDetailsHeader)).toContainText(fName);
    });
});