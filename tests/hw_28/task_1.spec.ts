import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/pages/HomePage';
import { SignInForm } from './page-objects/components/forms/SignInForm';

    test('Change name', async ({ page}) => {
      let homePage: HomePage;
      let signInForm: SignInForm;
      homePage = new HomePage(page);
      signInForm = new SignInForm(page);
        
      await page.route('**/api/users/profile', async (route) => {
            const body = {
                "status": "ok",
                "data": {
                  "userId": 154409,
                  "photoFilename": "default-user.png",
                  "name": "Polar",
                  "lastName": "Bear"
                }
            };
            route.fulfill({
                body: JSON.stringify(body),
              });
            });
            
        await homePage.open();
        await homePage.openSignInForm();
        await signInForm.loginWithCredentials('384934+testUser3@gmail.com', 'QazQwe123');    
        await page.click('.-profile');
        await expect(page.locator('.profile_name')).toHaveText('Polar Bear');
});