class LeavePage {
    constructor(page) {
        this.page = page;
        this.applyLink = 'a:has-text("Apply")';
        this.leaveTypeSelect = '.oxd-select-text';
        this.leaveTypeOption = 'text=CAN - Bereavement';
        this.fromDateInput = 'div:has(label:text("From Date")) + div input';
        this.toDateInput = 'div:has(label:text("To Date")) + div input';
        this.applyButton = 'button[type="submit"]';
    }
}

module.exports = { LeavePage };