import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/pages/HomePage';
import { SignUpForm } from './page-objects/components/forms/SignUpForm';

test.describe("Registration", () => {
    let homePage: HomePage;
    let signUpForm: SignUpForm;


    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpForm = new SignUpForm(page);
        await homePage.open();
        await homePage.openSignUpForm();
    });

    //Filed name
    test('Field name. Empty field', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Name required')).toBeVisible();
    });

    test('Field name. Name is invalid', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('Джон');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Name is invalid')).toBeVisible();
    });

    test('Field name. Wrong length. 1 symbol', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('J');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field name. Wrong length. 23 symbols', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('JohnDouJohnDouJohnDou');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field name. Border color', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('J');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Last name
    test('Field Last name. Empty field', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Last name required')).toBeVisible();
    });

    test('Field Last name. Wrong data', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou1');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Last name is invalid')).toBeVisible();
    });

    test('Field Last name. Wrong length. 1 symbol', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('D');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Last name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field Last name. Wrong length. 21 symbols', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('DouDouDouDouDouDouDou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Last name has to be from 2 to 20 characters long')).toBeVisible();
    });

    //Field Email
    test('Field Email. Wrong data', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Email is incorrect')).toBeVisible();
    });

    test('Field Email. Empty field', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Email required')).toBeVisible();
    });

    test('Field Email. Border color', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Password
    test('Field Password. Length', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('qazqwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('qazqwe123');
        await expect(page.locator('.invalid-feedback').first()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback').last()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    test('Field Password. Empty', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect (page.getByText ('Password required')).toBeVisible();
    });

    test('Field Password. Border color', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Re-enter password
    test('Field Re-enter password. Passwords do not match', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('azQwe123');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await expect (page.getByText ('Passwords do not match')).toBeVisible();
    });

    test('Field Re-enter password. Empty', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await expect (page.getByText ('Re-enter password required')).toBeVisible();
    });

    test('Field Re-enter password. Border color', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('');
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Button Register
    test('Button Register disabled', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await page.locator('.modal-footer .btn-primary').isDisabled();
    });

    //Successfull registration
    test('Successfull registration', async ({ page }) => {
        await signUpForm.enterValueAndTriggerErrorOnNameField('John');
        await signUpForm.enterValueAndTriggerErrorOnLastNameField('Dou');
        await signUpForm.enterValueAndTriggerErrorOnEmailField('384934+testUser3@gmail.com');
        await signUpForm.enterValueAndTriggerErrorOnPasswordField('QazQwe123');
        await signUpForm.enterValueAndTriggerErrorOnRepeatPasswordField('QazQwe123');
        await page.locator('.modal-footer .btn-primary').click();
    });
});
