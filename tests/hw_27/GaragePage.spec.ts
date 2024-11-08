import test, { chromium } from "@playwright/test";
import { HomePage } from "./page-objects/pages/HomePage"; 
import { SignInForm } from "./page-objects/components/forms/signInForm"; 
import { GaragePage } from "./page-objects/pages/garagePage"; 


test.describe(('GaragePage with POM'), () => {
    test.use({ storageState: 'test-data/states/mainUserState.json' });
    let homePage: HomePage;
    let signInForm: SignInForm;
    let garagePage: GaragePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
        await garagePage.open();

    })

    test(('Add BMW X5'), async () => {
        await garagePage.addNewCar('BMW', 'X5', '100');
        await garagePage.verifyLastAddedCarName('BMW X5');
    })

})
