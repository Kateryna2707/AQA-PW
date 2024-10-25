import { Locator, Page } from "@playwright/test";

export class SignUpForm {
    readonly page: Page;
    readonly nameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly repeatPasswordField: Locator;
    readonly registerButton: Locator;
    readonly form: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#signupName');
        this.lastNameField = page.locator('#signupLastName');
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.repeatPasswordField = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('.modal-footer .btn-primary');
        this.form = page.locator('.modal-content');
    }

    async enterValueAndTriggerErrorOnNameField(name: string) {
        await this.nameField.fill(name);
        await this.nameField.blur();
    }

    async enterValueAndTriggerErrorOnLastNameField(lastName: string) {
        await this.lastNameField.fill(lastName);
        await this.lastNameField.blur();
    }

    async enterValueAndTriggerErrorOnEmailField(email: string) {
        await this.emailField.fill(email);
        await this.emailField.blur();
    }

    async enterValueAndTriggerErrorOnPasswordField(password: string) {
        await this.passwordField.fill(password);
        await this.passwordField.blur();
    }

    async enterValueAndTriggerErrorOnRepeatPasswordField(repeatPassword: string) {
        await this.repeatPasswordField.fill(repeatPassword);
        await this.repeatPasswordField.blur();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }
}
