import { test as base } from '@playwright/test';

/**
 * Extend the base test with custom fixtures here.
 *
 * Example:
 *   export const test = base.extend<{ myFixture: string }>({
 *     myFixture: async ({}, use) => {
 *       await use('fixture-value');
 *     },
 *   });
 */
export const test = base;
export { expect } from '@playwright/test';
