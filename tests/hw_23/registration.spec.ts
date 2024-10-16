import { test, expect } from '@playwright/test';

test.describe("Registration", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
        await page.locator('text=Sign up').click();
    });

    //Filed name
    test('Field name. Empty field', async ({ page }) => {
        await page.locator('#signupName').focus();
        await page.locator('#signupName').blur();
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Name required')).toBeVisible();
    });

    test('Field name. Name is invalid', async ({ page }) => {
        await page.locator('#signupName').fill('Джон');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Name is invalid')).toBeVisible();
    });

    test('Field name. Wrong length. 1 symbol', async ({ page }) => {
        await page.locator('#signupName').fill('J');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field name. Wrong length. 23 symbols', async ({ page }) => {
        await page.locator('#signupName').fill('JohnDouJohnDouJohnDou');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field name. Border color', async ({ page }) => {
        await page.locator('#signupName').fill('J');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Last name
    test('Field Last name. Empty field', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').focus();
        await page.locator('#signupLastName').blur();
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Last name required')).toBeVisible();
    });

    test('Field Last name. Wrong data', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou1');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Last name is invalid')).toBeVisible();
    });

    test('Field Last name. Wrong length. 1 symbol', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('D');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Last name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Field Last name. Wrong length. 21 symbols', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('DouDouDouDouDouDouDou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Last name has to be from 2 to 20 characters long')).toBeVisible();
    });

    //Field Email
    test('Field Email. Wrong data', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Email is incorrect')).toBeVisible();
    });

    test('Field Email. Empty field', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').focus();
        await page.locator('#signupEmail').blur();
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Email required')).toBeVisible();
    });

    test('Field Email. Border color', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').focus();
        await page.locator('#signupEmail').blur();
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Password
    test('Field Password. Length', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('qazqwe123');
        await page.locator('#signupRepeatPassword').fill('qazqwe123');
        await expect (page.getByText ('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
    });

    test('Field Password. Empty', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').focus();
        await page.locator('#signupPassword').blur();
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect (page.getByText ('Password required')).toBeVisible();
    });

    test('Field Password. Border color', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').focus();
        await page.locator('#signupPassword').blur();
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Field Re-enter password
    test('Field Re-enter password. Passwords do not match', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('azQwe123');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await expect (page.getByText ('Passwords do not match')).toBeVisible();
    });

    test('Field Re-enter password. Empty', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').focus();
        await page.locator('#signupRepeatPassword').blur();
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await expect (page.getByText ('Re-enter password required')).toBeVisible();
    });

    test('Field Re-enter password. Border color', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').focus();
        await page.locator('#signupRepeatPassword').blur();
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    //Button Register
    test('Button Register disabled', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').focus();
        await page.locator('#signupPassword').blur();
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await page.locator('.modal-footer .btn-primary').isDisabled();
    });

    //Successfull registration
    test('Successfull registration', async ({ page }) => {
        await page.locator('#signupName').fill('John');
        await page.locator('#signupLastName').fill('Dou');
        await page.locator('#signupEmail').fill('384934+testUser3@gmail.com');
        await page.locator('#signupPassword').fill('QazQwe123');
        await page.locator('#signupRepeatPassword').fill('QazQwe123');
        await page.locator('.modal-footer .btn-primary').click();
    });
});
