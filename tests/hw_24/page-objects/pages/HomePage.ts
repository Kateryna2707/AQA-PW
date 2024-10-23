import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.locator('text=Sign up');
    }

    async open() {
        await this.page.goto('');
    }

    async openSignUpForm() {
        await this.signUpButton.click();
    }
}
