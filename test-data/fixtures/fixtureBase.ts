import { test as base } from '@playwright/test'
import { SignInForm } from '../../tests/hw_27/page-objects/components/forms/signInForm'; 
import { GaragePage } from '../../tests/hw_27/page-objects/pages/garagePage'; 
import { chromium } from '@playwright/test';

type MyFixtures = {
    userGaragePage: GaragePage;
    signInForm: SignInForm;

};

export const test = base.extend<MyFixtures>({
    userGaragePage: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: 'test-data/states/mainUserState.json'
        })
        const page = await context.newPage();
        
        let garagePage = new GaragePage(page);
        await garagePage.open();
        await use(garagePage);
    },

})