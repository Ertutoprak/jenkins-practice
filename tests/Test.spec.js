import { test } from '@playwright/test';

test('Practice with AI', async ({ page }) => {
    
  // go to https://practice.cydeo.com/.
   await page.goto('https://practice.cydeo.com/');

  // pause for 3 seconds.
   await page.waitForTimeout(3000);

  // get the title of the page.
   let actualTitle = await page.title();

  // log the title.
  console.log(actualTitle);

});



test.describe('Test Group', () => {

  test('A', async ({ page }) => {
    // Your test steps go here
  });

  test('B', async ({ page }) => {
    // Your test steps go here
  });

  test('C', async ({ page }) => {
    // Your test steps go here
  });
  
});