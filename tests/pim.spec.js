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

    test('Show error when first name is missing', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.clickPIM();
        await pimPage.page.click(pimPage.addButton);
        await pimPage.page.fill(pimPage.lastNameInput, 'Hanchi');
        await pimPage.page.click(pimPage.saveButton);

        const error = pimPage.page.locator('.oxd-input-field-error-message').first();
        await expect(error).toBeVisible();
        await expect(error).toHaveText('Required');
    })
test.skip('Should search and delete an employee', async ({ dashboardPage, pimPage }) => {
    await dashboardPage.clickPIM();
    const nameToSearch = 'John';   
    await pimPage.searchEmployee(nameToSearch);
    await pimPage.page.waitForSelector(pimPage.deleteIcon, { state: 'visible', timeout: 5000 });
    await pimPage.page.click(pimPage.deleteIcon);
    await pimPage.page.click(pimPage.confirmDeleteButton);
    await pimPage.page.click(pimPage.searchButton);
    const noRecordsMessage = pimPage.page.locator('text=No Records Found');
    await expect(noRecordsMessage).toBeVisible();
});
});