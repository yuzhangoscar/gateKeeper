import { test, expect } from '@playwright/test';

test.describe('GateKeeper Tests', () => {
    test.beforeEach('test', async ({ page }) => {
        await page.goto('https://sandbox.gk.mvsi.com/');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('yuz@mvsi.com');
        await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('Test.1234');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('button', { name: 'Orders' }).click();
        await page.locator('button').nth(2).click();
        await page.getByRole('textbox').first().fill('CandidateName');
        await page.locator('input[type="email"]').click();
        await page.locator('input[type="email"]').fill('candidate@email.com');
        await page.getByRole('textbox').nth(2).click();
        await page.getByRole('textbox').nth(2).fill('61');
        await page.getByRole('textbox').nth(3).click();
        await page.getByRole('textbox').nth(3).fill('1234');
        await page.getByRole('textbox').nth(4).click();
        await page.getByRole('textbox').nth(4).fill('candidateRole');
        await page.getByRole('textbox', { name: 'Select Company *' }).click();
        await page.getByRole('textbox', { name: 'Select Company *' }).fill('Latitude Finance');
        await page.getByRole('button', { name: 'Latitude Finance' }).click();
        await page.getByRole('textbox', { name: 'Select Client *' }).click();
        await page.getByRole('textbox', { name: 'Select Client *' }).fill('Yu Zhang');
        await page.getByRole('button', { name: 'Yu Zhang', exact: true }).click();
        await page.getByRole('textbox', { name: 'Select Package' }).click();
        await page.getByRole('button', { name: 'Latitude Finance AU Standard' }).click();
        await page.getByRole('combobox').first().selectOption('EMPLOYMENT');
        await page.getByRole('textbox', { name: 'e.g. Latitude Finance' }).click();
        await page.getByRole('textbox', { name: 'e.g. Latitude Finance' }).fill('Latitude Finance');
        await page.getByRole('textbox', { name: 'Length must be below' }).click();
        await page.getByRole('textbox', { name: 'Length must be below' }).fill('candidateRole');
        await page.getByRole('textbox', { name: 'e.g. Sydney' }).click();
        await page.getByRole('textbox', { name: 'e.g. Sydney' }).fill('Sydney');
        await page.getByRole('combobox').nth(1).selectOption('NSW');
        await page.waitForTimeout(500);
        await page.getByRole('button', { name: 'Confirm' }).click();
        const orderRefInput = await page.locator('label').filter({ hasText: /Order.*Ref.*Number/ })
            .locator('..')
            .locator('input[type="text"]');
        await orderRefInput.click();
        await orderRefInput.fill('12345');
        await page.getByRole('button', { name: 'Create' }).click();
        await expect(page.getByRole('textbox').first()).toHaveValue('CandidateName');
        await expect(page.locator('input[type="email"]')).toHaveValue('candidate@email.com');
        await expect(page.getByRole('textbox').nth(2)).toHaveValue('61');
        await expect(page.getByRole('textbox').nth(3)).toHaveValue('1234');
        await expect(page.getByRole('textbox').nth(4)).toHaveValue('candidateRole');
        await expect(page.getByRole('link', { name: 'Company Latitude Finance' }).getByRole('textbox')).toHaveValue('Latitude Finance');
        await expect(page.getByRole('link', { name: 'Package Latitude Finance AU' }).locator('input[type="text"]')).toHaveValue('Latitude Finance AU Standard Employee Package');
        await expect(page.getByRole('cell', { name: 'National Police Check' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Academic' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Entitlement To Work' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Reference' })).toBeVisible();
        await page.getByRole('button', { name: 'Authorize Order' }).click();
        await expect(page.getByText('National Police CheckNational Police CheckStatus VerifierPriceTime Target (')).toBeVisible();
        await expect(page.getByText('AcademicAcademicStatus')).toBeVisible();
        await expect(page.getByText('Entitlement To WorkEntitlement To WorkStatus VerifierPriceTime Target (hours)')).toBeVisible();
        await expect(page.getByText('ReferenceReferenceStatus')).toBeVisible();
    });

    test('National Police Check', async ({ page }) => {
        await page.waitForTimeout(1000);
    });
});
