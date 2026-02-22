import { test as base, Page } from '@playwright/test';

type fileUploadFixture = {
    uploadFile: (page: Page, fileType: string, filePath: string) => Promise<void>;
}

export const test = base.extend<fileUploadFixture>(
    {
        uploadFile: async ({ }, use) => {
            await use(async (page: Page, fileType: string, filePath: string) => {
                await page.locator('label[for="Choose your document Type"] + div div[role="button"]').click();
                await page.getByRole('option', { name: fileType }).click();
                const fileChooserPromise = page.waitForEvent('filechooser');
                await page.getByLabel('Upload Image').click();
                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles(filePath);
                await page.locator('button[type="submit"]', { hasText: 'Verify Your Details' }).click();
                await page.waitForTimeout(2000);
            });
        }
    }
);

export { expect } from '@playwright/test';
