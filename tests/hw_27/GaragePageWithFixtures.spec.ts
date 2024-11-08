import { chromium } from "@playwright/test";
import { HomePage } from "./page-objects/pages/HomePage"; 
import { SignInForm } from "./page-objects/components/forms/signInForm"; 
import { test } from "../../test-data/fixtures/fixtureBase";


test.describe(('GaragePage with POM'), () => {
    test.use({ storageState: 'test-data/states/mainUserState.json' });
    let homePage: HomePage;
    let signInForm: SignInForm;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
    })

    test(('Add Ford Fiesta'), async ( { userGaragePage }) => {
        await userGaragePage.addNewCar('Ford', 'Fiesta', '2140');
        await userGaragePage.verifyLastAddedCarName('Ford Fiesta');
    })

})
