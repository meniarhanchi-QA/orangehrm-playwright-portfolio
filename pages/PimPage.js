class PimPage {
    constructor(page) {
        this.page = page;
        this.addButton = 'button.oxd-button--medium:has-text("Add")';
        this.firstNameInput = 'input[name="firstName"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.saveButton = 'button[type="submit"]';
        this.personalDetailsHeader = '.orangehrm-edit-employee-name';

        this.employeeNameSearchInput = 'div:has-text("Employee Name") + div input';
        this.searchButton = 'button[type="submit"]';
        this.deleteIcon = '.bi-trash';
        this.confirmDeleteButton = 'button:has-text("Yes, Delete")';
    }

    async addEmployee(firstName, lastName) {
        await this.page.waitForSelector(this.addButton);
        await this.page.click(this.addButton);
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.click(this.saveButton);
        await this.page.waitForURL(/.*viewPersonalDetails.*/, { timeout: 10000 });
    }

    async searchEmployee(employeeName) {
        await this.page.fill(this.employeeNameSearchInput, employeeName);
        await this.page.click(this.searchButton);
        await this.page.waitForSelector('.oxd-table-loader', { state: 'hidden' });
    }
}

module.exports = { PimPage };