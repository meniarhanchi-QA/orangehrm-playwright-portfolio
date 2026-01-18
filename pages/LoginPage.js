class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
        // 1. Add a locator that only exists on the Dashboard
        this.dashboardHeader = 'h6:has-text("Dashboard")';
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.page.waitForSelector(this.dashboardHeader);
    }
}
module.exports = { LoginPage };