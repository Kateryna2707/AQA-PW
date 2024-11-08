import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/pages/HomePage'
import { SignInForm } from '../page-objects/components/forms/signInForm';
import { GaragePage } from '../page-objects/pages/garagePage';
import { mainUserEmail, mainUserPassword } from '../../../test-data/credentials'; 


test.describe('Garage tests with POM', () => {
    let homePage: HomePage;
    let signInForm: SignInForm;
    let garagePage: GaragePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
    })

    test('Login As User2 and save state', async ({ page }) => {
        await homePage.open();
        await homePage.openSignInForm();
        await signInForm.loginWithCredentials(mainUserEmail, mainUserPassword);
        await garagePage.verifyPageIsOpen();
        await page.context().storageState({ path: 'test-data/states/mainUserState.json'})
    })

})




    // let garagePage: GaragePage;

    // test('Login As User1 and save state', async ({ page }) => {
    //     garagePage = new GaragePage(page);
    //     await page.goto('/');
    //     await garagePage.openAsLoggedUser(users.mainUser.email, users.mainUser.password);
    //     await page.context().storageState({
    //         path: './test-data/states/userOneState.json'
    //     })
    // })

    // test('Login As User2 and save state', async ({ page }) => {
    //     garagePage = new GaragePage(page);
    //     await page.goto('/');
    //     await garagePage.openAsLoggedUser(users.user2.email, users.user2.password);
    //     await page.context().storageState({
    //         path: './test-data/states/userTwoState.json'
    //     })
    // })
    