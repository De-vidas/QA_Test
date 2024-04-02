import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    //Open the Stack Overflow page (the UI might be slightly different now).
    await page.goto('https://stackoverflow.com/');
    //Hide popup
    await page.getByRole('button', { name: 'Necessary cookies only' }).click();
});

test("The first test ", async ({page}) => {
    //Use the navigation menu next to the logo to open the link named “Questions”.
    await page.getByRole('menuitem').first().click();
    //Check the “No accepted answer” checkbox.
    await page.locator('#nav-questions').click();
    //Expand the filter menu.
    await page.getByRole('button', { name: 'Filter' }).click();
    //Check the “No accepted answer” checkbox. 
    await page.getByLabel('No accepted answer').check();
    //Mark the “Recent activity” radio button. 
    await page.getByLabel('Recent activity').check();
    //Enter and mark “Typescript” in the “The following tags” input element. 
    await page.getByRole('combobox', { name: 'The following tags:' }).click();
    await page.getByRole('combobox', { name: 'The following tags:' }).fill('Typescript');
    await page.getByRole('option', { name: /typescript.*info/ }).locator('span').nth(1).click();
    //Click the "Apply filter" button. 
    await page.getByRole('button', { name: 'Apply filter' }).click();
    //Confirm page url changed
    const newUrl = await page.url();
    expect(newUrl).toBe('https://stackoverflow.com/questions/tagged/typescript?sort=RecentActivity&filters=NoAcceptedAnswer&edited=true');
})

test("Second test", async ({page}) => {
 //Use the navigation menu next to the logo to open the link named "Tags". 
 await page.getByRole('menuitem').first().click();
 await page.getByRole('link', { name: 'Tags' }).click();
 //Enter "typescript" in the "Filter by tag name" field. 
 await page.getByPlaceholder('Filter by tag name').click();
 await page.getByPlaceholder('Filter by tag name').fill('typescript');
 //Click on the tag “typescript” that appears below. 
 await page.getByRole('link', { name: 'show questions tagged \'typescript\'' }).click();
 //Assert if the process is successful. 
 await expect(page.locator('#mainbar')).toContainText('Questions tagged [typescript]');
})
