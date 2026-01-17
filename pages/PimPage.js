class PimPage {
    constructor(page) {
        this.page = page;

        // Locators for Adding an Employee
        this.addButton = 'button:has-text("Add")';
        this.firstNameInput = 'input[name="firstName"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.saveButton = 'button[type="submit"]';
        
        // Locator to verify success (the employee name in the header)
        this.personalDetailsHeader = '.orangehrm-edit-employee-name';
    }

    async addEmployee(firstName, lastName) {
    await this.page.click(this.addButton);
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.click(this.saveButton);
    await this.page.waitForURL(/.*viewPersonalDetails.*/);
}
}

module.exports = { PimPage };